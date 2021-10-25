const fs = require("fs");
const width = 500;
const height = 500;
const dir = __dirname;
const description = "WeMint Cash First Edition: Washington #";
const baseImageUri = "https://ipfs.io/ipfs/QmcrBWu1DESE4cCW65otF78z8BtNtToC8TnJL2t4dnQBeD";
const startEditionFrom = 1;
const endEditionAt = 10000;
const editionSize = 10000;
const raceWeights = [
  {
    value: "Presidents",
    from: 1,
    to: editionSize,
  },
];

const races = {
  Presidents: {
    name: "Washington",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 10,
            name: "Noise",
            path: `${dir}/1-background/Noise.png`,
            weight: 100,
          },
          {
            id: 11,
            name: "Meme",
            path: `${dir}/1-background/Meme.png`,
            weight: 99  ,
          },
          {
            id: 12,
            name: "Green",
            path: `${dir}/1-background/Green.png`,
            weight: 97,
          },
          {
            id: 13,
            name: "Yellow",
            path: `${dir}/1-background/Yellow.png`,
            weight: 88,
          },
          {
            id: 14,
            name: "Orange",
            path: `${dir}/1-background/Orange.png`,
            weight: 80,
          },
          {
            id: 15,
            name: "Pink",
            path: `${dir}/1-background/Pink.png`,
            weight: 72,
          },
          {
            id: 16,
            name: "Purple",
            path: `${dir}/1-background/Purple.png`,
            weight: 64,
          },
          {
            id: 17,
            name: "Cyan",
            path: `${dir}/1-background/Cyan.png`,
            weight: 56,
          },
          {
            id: 18,
            name: "Red",
            path: `${dir}/1-background/Red.png`,
            weight: 48,
          },
          {
            id: 19,
            name: "Violet",
            path: `${dir}/1-background/Violet.png`,
            weight: 40,
          },
          {
            id: 20,
            name: "Sky",
            path: `${dir}/1-background/Sky.png`,
            weight: 32,
          },
          {
            id: 21,
            name: "Turquoise",
            path: `${dir}/1-background/Turquoise.png`,
            weight: 24,
          },
          {
            id: 22,
            name: "Blue",
            path: `${dir}/1-background/Blue.png`,
            weight: 16,
          },
          {
            id: 23,
            name: "Cyan",
            path: `${dir}/1-background/Cyan.png`,
            weight: 8,
          }
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Coat",
        elements: [
          {
            id: 10,
            name: "Astro",
            path: `${dir}/2-suit/Astro.png`,
            weight: 100,
          },
          {
            id: 11,
            name: "King",
            path: `${dir}/2-suit/King.png`,
            weight: 99,
          },
          {
            id: 12,
            name: "Old School",
            path: `${dir}/2-suit/OldSchool.png`,
            weight: 94,
          },
          {
            id: 13,
            name: "Clown",
            path: `${dir}/2-suit/Clown.png`,
            weight: 84,
          },
          {
            id: 14,
            name: "Punk",
            path: `${dir}/2-suit/Punk.png`,
            weight: 72,
          },
          {
            id: 15,
            name: "Army",
            path: `${dir}/2-suit/Army.png`,
            weight: 60,
          },
          {
            id: 16,
            name: "Doctor",
            path: `${dir}/2-suit/Doctor.png`,
            weight: 48,
          },
          {
            id: 17,
            name: "Pirate",
            path: `${dir}/2-suit/Pirate.png`,
            weight: 36,
          },
          {
            id: 18,
            name: "Cowboy",
            path: `${dir}/2-suit/Cowboy.png`,
            weight: 24,
          },
          {
            id: 19,
            name: "Hippie",
            path: `${dir}/2-suit/Hippie.png`,
            weight: 12,
          }
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pin",
        elements: [
          {
            id: 0,
            name: "No Pin",
            path: `${dir}/4-pin/NoPin.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Bitcoin",
            path: `${dir}/4-pin/Bitcoin.png`,
            weight: 90,
          },
          {
            id: 2,
            name: "Ethereum",
            path: `${dir}/4-pin/Ethereum.png`,
            weight: 80,
          },
          {
            id: 3,
            name: "Cardano",
            path: `${dir}/4-pin/Cardano.png`,
            weight: 70,
          },
          {
            id: 4,
            name: "Chainlink",
            path: `${dir}/4-pin/Chainlink.png`,
            weight: 65,
          },
          {
            id: 5,
            name: "Dogecoin",
            path: `${dir}/4-pin/Dogecoin.png`,
            weight: 60,
          },
          {
            id: 6,
            name: "Binance",
            path: `${dir}/4-pin/Binance.png`,
            weight: 55,
          },
          {
            id: 7,
            name: "Litecoin",
            path: `${dir}/4-pin/Litecoin.png`,
            weight: 50,
          },
          {
            id: 8,
            name: "Monero",
            path: `${dir}/4-pin/Monero.png`,
            weight: 45,
          },
          {
            id: 9,
            name: "Polkadot",
            path: `${dir}/4-pin/Polkadot.png`,
            weight: 40,
          },
          {
            id: 10,
            name: "Polygon",
            path: `${dir}/4-pin/Polygon.png`,
            weight: 35,
          },
          {
            id: 11,
            name: "Safemoon",
            path: `${dir}/4-pin/Safemoon.png`,
            weight: 30,
          },
          {
            id: 12,
            name: "Shiba",
            path: `${dir}/4-pin/Shiba.png`,
            weight: 25,
          },
          {
            id: 13,
            name: "Solana",
            path: `${dir}/4-pin/Solana.png`,
            weight: 20,
          },
          {
            id: 14,
            name: "Terra",
            path: `${dir}/4-pin/Terra.png`,
            weight: 15,
          },
          {
            id: 15,
            name: "Uniswap",
            path: `${dir}/4-pin/Uniswap.png`,
            weight: 10,
          },
          {
            id: 16,
            name: "XRP",
            path: `${dir}/4-pin/XRP.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 10,
            name: "Diamond Laser",
            path: `${dir}/5-eyes/Diamond.png`,
            weight: 100,
          },
          {
            id: 11,
            name: "Laser",
            path: `${dir}/5-eyes/Laser.png`,
            weight: 99,
          },
          {
            id: 12,
            name: "Blue Laser",
            path: `${dir}/5-eyes/Blue.png`,
            weight: 97,
          },
          {
            id: 13,
            name: "Meme",
            path: `${dir}/5-eyes/Meme.png`,
            weight: 95,
          },
          {
            id: 14,
            name: "Cyborg",
            path: `${dir}/5-eyes/Cyborg.png`,
            weight: 90,
          },
          {
            id: 15,
            name: "Glasses",
            path: `${dir}/5-eyes/Glasses.png`,
            weight: 81,
          },
          {
            id: 16,
            name: "Censored",
            path: `${dir}/5-eyes/Censored.png`,
            weight: 72,
          },
          {
            id: 17,
            name: "3D",
            path: `${dir}/5-eyes/3D.png`,
            weight: 63,
          },
          {
            id: 18,
            name: "Bans",
            path: `${dir}/5-eyes/Bans.png`,
            weight: 54,
          },
          {
            id: 19,
            name: "Blindfold ",
            path: `${dir}/5-eyes/Blindfold.png`,
            weight: 45,
          },
          {
            id: 20,
            name: "Clown",
            path: `${dir}/5-eyes/Clown.png`,
            weight: 36,
          },
          {
            id: 21,
            name: "Emo",
            path: `${dir}/5-eyes/Emo.png`,
            weight: 27,
          },
          {
            id: 22,
            name: "Reading",
            path: `${dir}/5-eyes/Reading.png`,
            weight: 18,
          },
          {
            id: 23,
            name: "Zombie",
            path: `${dir}/5-eyes/Zombie.png`,
            weight: 9,
          }
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "Fancy",
            path: `${dir}/9-accessories/Fancy.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Diamond",
            path: `${dir}/9-accessories/Diamond.png`,
            weight: 99,
          },
          {
            id: 2,
            name: "Gold",
            path: `${dir}/9-accessories/Gold.png`,
            weight: 94,
          },
          {
            id: 3,
            name: "Stud",
            path: `${dir}/9-accessories/Stud.png`,
            weight: 80,
          },
          {
            id: 4,
            name: "Hoop",
            path: `${dir}/9-accessories/Hoop.png`,
            weight: 70,
          },
          {
            id: 5,
            name: "Tattoos",
            path: `${dir}/9-accessories/Tattoos.png`,
            weight: 60,
          },
          {
            id: 6,
            name: "No accessories",
            path: `${dir}/9-accessories/NoAcc.png`,
            weight: 50,
          }
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mouth",
        elements: [
          {
            id: 10,
            name: "Grill",
            path: `${dir}/3-mouth/Grill.png`,
            weight: 100,
          },
          {
            id: 11,
            name: "Pipe",
            path: `${dir}/3-mouth/Pipe.png`,
            weight: 94,
          },
          {
            id: 12,
            name: "Hemp",
            path: `${dir}/3-mouth/Hemp.png`,
            weight: 88,
          },
          {
            id: 13,
            name: "Beard",
            path: `${dir}/3-mouth/Beard.png`,
            weight: 80,
          },
          {
            id: 14,
            name: "Clown",
            path: `${dir}/3-mouth/Clown.png`,
            weight: 72,
          },
          {
            id: 15,
            name: "No Mouth Change",
            path: `${dir}/3-mouth/NoMask.png`,
            weight: 64,
          },
          {
            id: 16,
            name: "Bubblegum",
            path: `${dir}/3-mouth/Bubblegum.png`,
            weight: 56,
          },
          {
            id: 17,
            name: "Mustache",
            path: `${dir}/3-mouth/Mustache.png`,
            weight: 48,
          },
          {
            id: 18,
            name: "Medical",
            path: `${dir}/3-mouth/Medical.png`,
            weight: 40,
          },
          {
            id: 19,
            name: "Sad",
            path: `${dir}/3-mouth/Sad.png`,
            weight: 32,
          },
          {
            id: 20,
            name: "Smile",
            path: `${dir}/3-mouth/Smile.png`,
            weight: 24,
          },
          {
            id: 21,
            name: "Tongue",
            path: `${dir}/3-mouth/Tongue.png`,
            weight: 16,
          },
          {
            id: 22,
            name: "Zombie",
            path: `${dir}/3-mouth/Zombie.png`,
            weight: 8,
          }
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Head",
        elements: [
          {
            id: 10,
            name: "Astro",
            path: `${dir}/8-hair/Astro.png`,
            weight: 100,
          },
          {
            id: 11,
            name: "Crown",
            path: `${dir}/8-hair/Crown.png`,
            weight: 99,
          },
          {
            id: 12,
            name: "McD",
            path: `${dir}/8-hair/McD.png`,
            weight: 94,
          },
          {
            id: 13,
            name: "Army",
            path: `${dir}/8-hair/Army.png`,
            weight: 84,
          },
          {
            id: 14,
            name: "Afro",
            path: `${dir}/8-hair/Afro.png`,
            weight: 78,
          },
          {
            id: 15,
            name: "Bandana",
            path: `${dir}/8-hair/Bandana.png`,
            weight: 70,
          },
          {
            id: 16,
            name: "Beanie",
            path: `${dir}/8-hair/Beanie.png`,
            weight: 62,
          },
          {
            id: 17,
            name: "Clown",
            path: `${dir}/8-hair/Clown.png`,
            weight: 54,
          },
          {
            id: 18,
            name: "Cowboy",
            path: `${dir}/8-hair/Cowboy.png`,
            weight: 45,
          },
          {
            id: 19,
            name: "Kitty",
            path: `${dir}/8-hair/Kitty.png`,
            weight: 36,
          },
          {
            id: 20,
            name: "Doctor",
            path: `${dir}/8-hair/Doctor.png`,
            weight: 27,
          },
          {
            id: 21,
            name: "Mohawk",
            path: `${dir}/8-hair/Mohawk.png`,
            weight: 18,
          },
          {
            id: 22,
            name: "Stunt",
            path: `${dir}/8-hair/Stunt.png`,
            weight: 10,
          },     
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      
      
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
