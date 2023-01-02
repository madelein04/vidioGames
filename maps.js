const emojis = {
  '-': ' ',
  'I': '🍌',
  'X': '💣',
  'O': '🌳',
  'PLAYER': '🐒',
  'BOMB_COLLISION': '🔥',
  'GAME_OVER': '👎',
  'WIN': '🏆',
  'HEART': '❤️',
};

const maps = [];
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
  O-XXXXXXXX
  X--XX-XX-X
  XX-------X
  XX-X-XXX-X
  XX-----X-X
  XX-X-XXX-X
  XXXX-----X
  XX-XXX-XXX
  XX-----IXX
  XXXXXXXXXX
`);
maps.push(`
  XXX----XXX
  XXX-XX--XX
  XXX-XXX--X
  X-----X-XX
  X-XXX-X--X
  X-X-X--X-X
  ------XX-X
  -XXXXXXX--
  -------OX-
  XXXXXXXXXI
`);

maps.push(`
  -------XXX
  -XX-XX--XX
  --X-XIX--X
  X-X-X-X-XX
  --X-X-X--X
  -XX---XX-X
  -XXXXXXX-X
  -XXXXXXX--
  ------XXX-
  XXXXX----O
`);