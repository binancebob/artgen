const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
} = require("./input/config.js");
const console = require("console");
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
var metadataList = [];
var attributesList = [];
var dnaList = [];

const saveImage = (_editionCount) => {
  fs.writeFileSync(
    `./outputImg2/${_editionCount}.png`,
    canvas.toBuffer("image/png")
  );
};

const signImage = (_sig) => {
  ctx.fillStyle = "#000000";
  ctx.font = "bold 15pt Copperplate";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(_sig, 15, 15);
};

const signDnaImage = (_sig) => {
  ctx.fillStyle = "#49804b";
  ctx.font = "bold 20pt Copperplate";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(_sig, 250, 460);
};


const genColor = () => {
  let hue = Math.floor(Math.random() * 360);
  let pastel = `hsl(${hue}, 100%, 85%)`;
  return pastel;
};

const drawBackground = () => {
  ctx.fillStyle = genColor();
  ctx.fillRect(0, 0, width, height);
};

const addMetadata = (_dna, _edition) => {
  let dateTime = Date.now();
  let tempMetadata = {
    description: `${description}${_edition}`,
    external_url: "https://wemint.cash",
    image: `${baseImageUri}/${_edition}.png`,
    name: `Washington #${_edition}`,
    dna: _dna.join(""),
    edition: _edition,
    attributes: attributesList,
  };
  metadataList.push(tempMetadata);
  attributesList = [];
};

const addAttributes = (_element) => {
  let selectedElement = _element.layer.selectedElement;
  attributesList.push({
    trait_type: _element.layer.name,
    value: selectedElement.name,
  });
};

const loadLayerImg = async (_layer) => {
  return new Promise(async (resolve) => {
    const image = await loadImage(`${_layer.selectedElement.path}`);
    resolve({ layer: _layer, loadedImage: image });
  });
};

const drawElement = (_element) => {
  ctx.drawImage(
    _element.loadedImage,
    _element.layer.position.x,
    _element.layer.position.y,
    _element.layer.size.width,
    _element.layer.size.height
  );
  addAttributes(_element);
};

const constructLayerToDna = (_dna = [], _races = [], _race) => {
  let mappedDnaToLayers = _races[_race].layers.map((layer, index) => {
    let selectedElement = layer.elements.find((e) => e.id == _dna[index]);
    return {
      name: layer.name,
      position: layer.position,
      size: layer.size,
      selectedElement: selectedElement,
    };
  });

  return mappedDnaToLayers;
};

const getRace = (_editionCount) => {
  let race = "No Race";
  raceWeights.forEach((raceWeight) => {
    if (_editionCount >= raceWeight.from && _editionCount <= raceWeight.to) {
      race = raceWeight.value;
    }
  });
  return race;
};

const isDnaUnique = (_DnaList = [], _dna = []) => {
  let foundDna = _DnaList.find((i) => i.join("") === _dna.join(""));
  return foundDna == undefined ? true : false;
};

const createDna = (_races, _race) => {
  let randNum = [];
  _races[_race].layers.forEach((layer) => {
    let randElementNum = Math.floor(Math.random() * 100);
    let num = 0;
    layer.elements.forEach((element) => {
      if (randElementNum >= 100 - element.weight) {
        num = element.id;
      }
    });
    randNum.push(num);
  });
  return randNum;
};

const writeMetaData = (_data) => {
  fs.writeFileSync("./outputMeta2/_metadata.json", _data);
};


const saveMetaDataSingleFile = (_editionCount) => {
  fs.writeFileSync(
    `./outputMeta2/${_editionCount}.json`,
    JSON.stringify(metadataList.find((meta) => meta.edition == _editionCount))
  );
};

const startCreating = async () => {
  writeMetaData("");
  let editionCount = startEditionFrom;
  while (editionCount <= endEditionAt) {
    let race = getRace(editionCount);
    let newDna = createDna(races, race);

    if (isDnaUnique(dnaList, newDna)) {
      let results = constructLayerToDna(newDna, races, race);
      let loadedElements = []; //promise array
      results.forEach((layer) => {
        loadedElements.push(loadLayerImg(layer));
      });

      await Promise.all(loadedElements).then((elementArray) => {
        ctx.clearRect(0, 0, width, height);
        // drawBackground();
        elementArray.forEach((element) => {
          drawElement(element);
        });
        signImage(`#${editionCount}`);
        signDnaImage(newDna.join(""));
        saveImage(editionCount);
        addMetadata(newDna, editionCount);
        saveMetaDataSingleFile(editionCount);
        console.log(
          `Created edition: ${editionCount}, Race: ${race} with DNA: ${newDna}`
        );
      });
      dnaList.push(newDna);
      editionCount++;
    } else {
      console.log("DNA exists!");
    }
  }
  writeMetaData(JSON.stringify(metadataList));
};

startCreating();
