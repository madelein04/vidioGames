const emojis = {
  '-': '🌳',
  'I': '🍌',
  'X': '🪵',
  'O': '',
  'PLAYER': '🐒',
  'BOMB_COLLISION': '🔥',
  'GAME_OVER': '👎',
  'WIN': '🏆',
  'HEART': '❤️',
};

const maps = [];
maps.push(`
  IX------XX
  -XXXXXX-XX
  -XXXX---XX
  -XXXXXXX-X
  ------XXXX
  -XXXX-XX-X
  XXXX---X-X
  XXXX-XXX-X
  XXXX-----X
  O----XXXXX
`);
maps.push(`
  O--X-----X
  X--XXXXX-X
  XX----XXXX
  X--XX-XX-X
  X-XXX--X-X
  X-XXXX-XXX
  X---XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----X--X
  XXXXX-XX-X
  ------XX-X
  -XXXXXXXXX
  -------XXX
  XXX-XX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  X-XXX-XXXX
`);
maps.push(`
  O-XXXXXXXX
  X--XX-XX-X
  XX-------X
  XX-X-X-X-X
  XX-----X-X
  ---X-XXX-X
  -XXX-----X
  ---XXX-XXX
  XX-----IXX
  XXXXXXXXXX
`);
maps.push(`
  X------XXX
  X-X-XX--XX
  X-X-XXX--X
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
  -XX--X--XX
  --X-XIX--X
  X-X-X-X-XX
  --X-X-X--X
  -XX---XX-X
  -XXX-XXX-X
  -XX-XX-X--
  ------X-X-
  XXXXX----O
`);