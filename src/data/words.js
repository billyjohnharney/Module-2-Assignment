// Each entry: { word, phonemes: string[] }
// Phonemes use a readable key (not full ARPAbet) mapped in phonemeDisplay below.
// Keys: consonants are their letter(s); vowels use a short code.
// Vowel codes: a=cat  e=bed  i=sit  o=hot  u=cup  ay=cake  ee=feet
//              ie=kite  oe=boat  oo=boot  oo2=book  ow=cow  oi=boy  er=her

export const wordList = [
  // ── 2-phoneme ────────────────────────────────────────────────────────────
  { word: "at",   phonemes: ["a",  "t"]  },
  { word: "it",   phonemes: ["i",  "t"]  },
  { word: "in",   phonemes: ["i",  "n"]  },
  { word: "up",   phonemes: ["u",  "p"]  },
  { word: "on",   phonemes: ["o",  "n"]  },
  { word: "am",   phonemes: ["a",  "m"]  },
  { word: "an",   phonemes: ["a",  "n"]  },
  { word: "if",   phonemes: ["i",  "f"]  },
  { word: "as",   phonemes: ["a",  "z"]  },

  // ── 3-phoneme ────────────────────────────────────────────────────────────
  // -at family
  { word: "bat",  phonemes: ["b",  "a",  "t"] },
  { word: "cat",  phonemes: ["k",  "a",  "t"] },
  { word: "fat",  phonemes: ["f",  "a",  "t"] },
  { word: "hat",  phonemes: ["h",  "a",  "t"] },
  { word: "mat",  phonemes: ["m",  "a",  "t"] },
  { word: "pat",  phonemes: ["p",  "a",  "t"] },
  { word: "rat",  phonemes: ["r",  "a",  "t"] },
  { word: "sat",  phonemes: ["s",  "a",  "t"] },
  { word: "vat",  phonemes: ["v",  "a",  "t"] },
  // -an family
  { word: "ban",  phonemes: ["b",  "a",  "n"] },
  { word: "can",  phonemes: ["k",  "a",  "n"] },
  { word: "fan",  phonemes: ["f",  "a",  "n"] },
  { word: "man",  phonemes: ["m",  "a",  "n"] },
  { word: "pan",  phonemes: ["p",  "a",  "n"] },
  { word: "ran",  phonemes: ["r",  "a",  "n"] },
  { word: "tan",  phonemes: ["t",  "a",  "n"] },
  { word: "van",  phonemes: ["v",  "a",  "n"] },
  // -ap family
  { word: "cap",  phonemes: ["k",  "a",  "p"] },
  { word: "gap",  phonemes: ["g",  "a",  "p"] },
  { word: "lap",  phonemes: ["l",  "a",  "p"] },
  { word: "map",  phonemes: ["m",  "a",  "p"] },
  { word: "nap",  phonemes: ["n",  "a",  "p"] },
  { word: "rap",  phonemes: ["r",  "a",  "p"] },
  { word: "sap",  phonemes: ["s",  "a",  "p"] },
  { word: "tap",  phonemes: ["t",  "a",  "p"] },
  { word: "zap",  phonemes: ["z",  "a",  "p"] },
  // -ad family
  { word: "bad",  phonemes: ["b",  "a",  "d"] },
  { word: "dad",  phonemes: ["d",  "a",  "d"] },
  { word: "had",  phonemes: ["h",  "a",  "d"] },
  { word: "lad",  phonemes: ["l",  "a",  "d"] },
  { word: "mad",  phonemes: ["m",  "a",  "d"] },
  { word: "sad",  phonemes: ["s",  "a",  "d"] },
  // -ag family
  { word: "bag",  phonemes: ["b",  "a",  "g"] },
  { word: "gag",  phonemes: ["g",  "a",  "g"] },
  { word: "lag",  phonemes: ["l",  "a",  "g"] },
  { word: "nag",  phonemes: ["n",  "a",  "g"] },
  { word: "rag",  phonemes: ["r",  "a",  "g"] },
  { word: "sag",  phonemes: ["s",  "a",  "g"] },
  { word: "tag",  phonemes: ["t",  "a",  "g"] },
  { word: "wag",  phonemes: ["w",  "a",  "g"] },
  // -ed family
  { word: "bed",  phonemes: ["b",  "e",  "d"] },
  { word: "fed",  phonemes: ["f",  "e",  "d"] },
  { word: "led",  phonemes: ["l",  "e",  "d"] },
  { word: "red",  phonemes: ["r",  "e",  "d"] },
  { word: "wed",  phonemes: ["w",  "e",  "d"] },
  // -en family
  { word: "ben",  phonemes: ["b",  "e",  "n"] },
  { word: "den",  phonemes: ["d",  "e",  "n"] },
  { word: "hen",  phonemes: ["h",  "e",  "n"] },
  { word: "men",  phonemes: ["m",  "e",  "n"] },
  { word: "pen",  phonemes: ["p",  "e",  "n"] },
  { word: "ten",  phonemes: ["t",  "e",  "n"] },
  { word: "yen",  phonemes: ["y",  "e",  "n"] },
  // -et family
  { word: "bet",  phonemes: ["b",  "e",  "t"] },
  { word: "get",  phonemes: ["g",  "e",  "t"] },
  { word: "jet",  phonemes: ["j",  "e",  "t"] },
  { word: "let",  phonemes: ["l",  "e",  "t"] },
  { word: "met",  phonemes: ["m",  "e",  "t"] },
  { word: "net",  phonemes: ["n",  "e",  "t"] },
  { word: "pet",  phonemes: ["p",  "e",  "t"] },
  { word: "set",  phonemes: ["s",  "e",  "t"] },
  { word: "vet",  phonemes: ["v",  "e",  "t"] },
  { word: "wet",  phonemes: ["w",  "e",  "t"] },
  // -id family
  { word: "bid",  phonemes: ["b",  "i",  "d"] },
  { word: "did",  phonemes: ["d",  "i",  "d"] },
  { word: "hid",  phonemes: ["h",  "i",  "d"] },
  { word: "kid",  phonemes: ["k",  "i",  "d"] },
  { word: "lid",  phonemes: ["l",  "i",  "d"] },
  { word: "rid",  phonemes: ["r",  "i",  "d"] },
  // -ig family
  { word: "big",  phonemes: ["b",  "i",  "g"] },
  { word: "dig",  phonemes: ["d",  "i",  "g"] },
  { word: "fig",  phonemes: ["f",  "i",  "g"] },
  { word: "gig",  phonemes: ["g",  "i",  "g"] },
  { word: "jig",  phonemes: ["j",  "i",  "g"] },
  { word: "pig",  phonemes: ["p",  "i",  "g"] },
  { word: "rig",  phonemes: ["r",  "i",  "g"] },
  { word: "wig",  phonemes: ["w",  "i",  "g"] },
  // -in family
  { word: "bin",  phonemes: ["b",  "i",  "n"] },
  { word: "din",  phonemes: ["d",  "i",  "n"] },
  { word: "fin",  phonemes: ["f",  "i",  "n"] },
  { word: "kin",  phonemes: ["k",  "i",  "n"] },
  { word: "pin",  phonemes: ["p",  "i",  "n"] },
  { word: "sin",  phonemes: ["s",  "i",  "n"] },
  { word: "tin",  phonemes: ["t",  "i",  "n"] },
  { word: "win",  phonemes: ["w",  "i",  "n"] },
  // -ip family
  { word: "dip",  phonemes: ["d",  "i",  "p"] },
  { word: "hip",  phonemes: ["h",  "i",  "p"] },
  { word: "lip",  phonemes: ["l",  "i",  "p"] },
  { word: "nip",  phonemes: ["n",  "i",  "p"] },
  { word: "rip",  phonemes: ["r",  "i",  "p"] },
  { word: "sip",  phonemes: ["s",  "i",  "p"] },
  { word: "tip",  phonemes: ["t",  "i",  "p"] },
  { word: "zip",  phonemes: ["z",  "i",  "p"] },
  // -it family
  { word: "bit",  phonemes: ["b",  "i",  "t"] },
  { word: "fit",  phonemes: ["f",  "i",  "t"] },
  { word: "hit",  phonemes: ["h",  "i",  "t"] },
  { word: "kit",  phonemes: ["k",  "i",  "t"] },
  { word: "lit",  phonemes: ["l",  "i",  "t"] },
  { word: "pit",  phonemes: ["p",  "i",  "t"] },
  { word: "sit",  phonemes: ["s",  "i",  "t"] },
  { word: "wit",  phonemes: ["w",  "i",  "t"] },
  // -og family
  { word: "bog",  phonemes: ["b",  "o",  "g"] },
  { word: "cog",  phonemes: ["k",  "o",  "g"] },
  { word: "dog",  phonemes: ["d",  "o",  "g"] },
  { word: "fog",  phonemes: ["f",  "o",  "g"] },
  { word: "hog",  phonemes: ["h",  "o",  "g"] },
  { word: "jog",  phonemes: ["j",  "o",  "g"] },
  { word: "log",  phonemes: ["l",  "o",  "g"] },
  { word: "tog",  phonemes: ["t",  "o",  "g"] },
  // -ot family
  { word: "cot",  phonemes: ["k",  "o",  "t"] },
  { word: "dot",  phonemes: ["d",  "o",  "t"] },
  { word: "got",  phonemes: ["g",  "o",  "t"] },
  { word: "hot",  phonemes: ["h",  "o",  "t"] },
  { word: "jot",  phonemes: ["j",  "o",  "t"] },
  { word: "lot",  phonemes: ["l",  "o",  "t"] },
  { word: "not",  phonemes: ["n",  "o",  "t"] },
  { word: "pot",  phonemes: ["p",  "o",  "t"] },
  { word: "rot",  phonemes: ["r",  "o",  "t"] },
  // -op family
  { word: "cop",  phonemes: ["k",  "o",  "p"] },
  { word: "hop",  phonemes: ["h",  "o",  "p"] },
  { word: "mop",  phonemes: ["m",  "o",  "p"] },
  { word: "pop",  phonemes: ["p",  "o",  "p"] },
  { word: "top",  phonemes: ["t",  "o",  "p"] },
  // -ug family
  { word: "bug",  phonemes: ["b",  "u",  "g"] },
  { word: "dug",  phonemes: ["d",  "u",  "g"] },
  { word: "hug",  phonemes: ["h",  "u",  "g"] },
  { word: "jug",  phonemes: ["j",  "u",  "g"] },
  { word: "mug",  phonemes: ["m",  "u",  "g"] },
  { word: "pug",  phonemes: ["p",  "u",  "g"] },
  { word: "rug",  phonemes: ["r",  "u",  "g"] },
  { word: "tug",  phonemes: ["t",  "u",  "g"] },
  // -un family
  { word: "bun",  phonemes: ["b",  "u",  "n"] },
  { word: "fun",  phonemes: ["f",  "u",  "n"] },
  { word: "gun",  phonemes: ["g",  "u",  "n"] },
  { word: "nun",  phonemes: ["n",  "u",  "n"] },
  { word: "pun",  phonemes: ["p",  "u",  "n"] },
  { word: "run",  phonemes: ["r",  "u",  "n"] },
  { word: "sun",  phonemes: ["s",  "u",  "n"] },
  // -ut family
  { word: "but",  phonemes: ["b",  "u",  "t"] },
  { word: "cut",  phonemes: ["k",  "u",  "t"] },
  { word: "gut",  phonemes: ["g",  "u",  "t"] },
  { word: "hut",  phonemes: ["h",  "u",  "t"] },
  { word: "nut",  phonemes: ["n",  "u",  "t"] },
  { word: "rut",  phonemes: ["r",  "u",  "t"] },

  // ── 4-phoneme ────────────────────────────────────────────────────────────
  // digraph sh
  { word: "ship", phonemes: ["sh", "i",  "p"]  },
  { word: "shop", phonemes: ["sh", "o",  "p"]  },
  { word: "shed", phonemes: ["sh", "e",  "d"]  },
  { word: "shin", phonemes: ["sh", "i",  "n"]  },
  { word: "shot", phonemes: ["sh", "o",  "t"]  },
  { word: "shut", phonemes: ["sh", "u",  "t"]  },
  { word: "fish", phonemes: ["f",  "i",  "sh"] },
  { word: "dish", phonemes: ["d",  "i",  "sh"] },
  { word: "wish", phonemes: ["w",  "i",  "sh"] },
  { word: "rush", phonemes: ["r",  "u",  "sh"] },
  { word: "gush", phonemes: ["g",  "u",  "sh"] },
  { word: "hush", phonemes: ["h",  "u",  "sh"] },
  { word: "lush", phonemes: ["l",  "u",  "sh"] },
  { word: "mush", phonemes: ["m",  "u",  "sh"] },
  { word: "bush", phonemes: ["b",  "oo2","sh"] },
  // digraph ch
  { word: "chin", phonemes: ["ch", "i",  "n"]  },
  { word: "chip", phonemes: ["ch", "i",  "p"]  },
  { word: "chop", phonemes: ["ch", "o",  "p"]  },
  { word: "chat", phonemes: ["ch", "a",  "t"]  },
  { word: "rich", phonemes: ["r",  "i",  "ch"] },
  { word: "much", phonemes: ["m",  "u",  "ch"] },
  { word: "such", phonemes: ["s",  "u",  "ch"] },
  // digraph th (voiceless)
  { word: "thin", phonemes: ["th", "i",  "n"]  },
  { word: "that", phonemes: ["th", "a",  "t"]  },
  { word: "this", phonemes: ["th", "i",  "z"]  },
  { word: "then", phonemes: ["th", "e",  "n"]  },
  { word: "with", phonemes: ["w",  "i",  "th"] },
  { word: "bath", phonemes: ["b",  "a",  "th"] },
  { word: "math", phonemes: ["m",  "a",  "th"] },
  { word: "path", phonemes: ["p",  "a",  "th"] },
  // -ng ending
  { word: "bang", phonemes: ["b",  "a",  "ng"] },
  { word: "gang", phonemes: ["g",  "a",  "ng"] },
  { word: "hang", phonemes: ["h",  "a",  "ng"] },
  { word: "rang", phonemes: ["r",  "a",  "ng"] },
  { word: "sang", phonemes: ["s",  "a",  "ng"] },
  { word: "king", phonemes: ["k",  "i",  "ng"] },
  { word: "ring", phonemes: ["r",  "i",  "ng"] },
  { word: "sing", phonemes: ["s",  "i",  "ng"] },
  { word: "wing", phonemes: ["w",  "i",  "ng"] },
  { word: "zing", phonemes: ["z",  "i",  "ng"] },
  { word: "long", phonemes: ["l",  "o",  "ng"] },
  { word: "song", phonemes: ["s",  "o",  "ng"] },
  { word: "tong", phonemes: ["t",  "o",  "ng"] },
  { word: "bung", phonemes: ["b",  "u",  "ng"] },
  { word: "dung", phonemes: ["d",  "u",  "ng"] },
  { word: "hung", phonemes: ["h",  "u",  "ng"] },
  { word: "lung", phonemes: ["l",  "u",  "ng"] },
  { word: "rung", phonemes: ["r",  "u",  "ng"] },
  { word: "sung", phonemes: ["s",  "u",  "ng"] },
  // long vowels (CVCe patterns represented as 4 phonemes)
  { word: "cake",  phonemes: ["k",  "ay", "k"]  },
  { word: "lake",  phonemes: ["l",  "ay", "k"]  },
  { word: "make",  phonemes: ["m",  "ay", "k"]  },
  { word: "rake",  phonemes: ["r",  "ay", "k"]  },
  { word: "sake",  phonemes: ["s",  "ay", "k"]  },
  { word: "take",  phonemes: ["t",  "ay", "k"]  },
  { word: "wake",  phonemes: ["w",  "ay", "k"]  },
  { word: "bake",  phonemes: ["b",  "ay", "k"]  },
  { word: "fame",  phonemes: ["f",  "ay", "m"]  },
  { word: "game",  phonemes: ["g",  "ay", "m"]  },
  { word: "name",  phonemes: ["n",  "ay", "m"]  },
  { word: "same",  phonemes: ["s",  "ay", "m"]  },
  { word: "tame",  phonemes: ["t",  "ay", "m"]  },
  { word: "cane",  phonemes: ["k",  "ay", "n"]  },
  { word: "lane",  phonemes: ["l",  "ay", "n"]  },
  { word: "mane",  phonemes: ["m",  "ay", "n"]  },
  { word: "pane",  phonemes: ["p",  "ay", "n"]  },
  { word: "sane",  phonemes: ["s",  "ay", "n"]  },
  { word: "vane",  phonemes: ["v",  "ay", "n"]  },
  { word: "bite",  phonemes: ["b",  "ie", "t"]  },
  { word: "kite",  phonemes: ["k",  "ie", "t"]  },
  { word: "mite",  phonemes: ["m",  "ie", "t"]  },
  { word: "site",  phonemes: ["s",  "ie", "t"]  },
  { word: "bike",  phonemes: ["b",  "ie", "k"]  },
  { word: "hike",  phonemes: ["h",  "ie", "k"]  },
  { word: "like",  phonemes: ["l",  "ie", "k"]  },
  { word: "mike",  phonemes: ["m",  "ie", "k"]  },
  { word: "bone",  phonemes: ["b",  "oe", "n"]  },
  { word: "cone",  phonemes: ["k",  "oe", "n"]  },
  { word: "lone",  phonemes: ["l",  "oe", "n"]  },
  { word: "tone",  phonemes: ["t",  "oe", "n"]  },
  { word: "zone",  phonemes: ["z",  "oe", "n"]  },
  { word: "hope",  phonemes: ["h",  "oe", "p"]  },
  { word: "cope",  phonemes: ["k",  "oe", "p"]  },
  { word: "mope",  phonemes: ["m",  "oe", "p"]  },
  { word: "rope",  phonemes: ["r",  "oe", "p"]  },
  { word: "cute",  phonemes: ["k",  "oo", "t"]  },
  { word: "mute",  phonemes: ["m",  "oo", "t"]  },
  { word: "tune",  phonemes: ["t",  "oo", "n"]  },
  // -ee words
  { word: "bee",   phonemes: ["b",  "ee"]       },
  { word: "fee",   phonemes: ["f",  "ee"]       },
  { word: "see",   phonemes: ["s",  "ee"]       },
  { word: "tee",   phonemes: ["t",  "ee"]       },
  { word: "wee",   phonemes: ["w",  "ee"]       },
  { word: "feed",  phonemes: ["f",  "ee", "d"]  },
  { word: "need",  phonemes: ["n",  "ee", "d"]  },
  { word: "seed",  phonemes: ["s",  "ee", "d"]  },
  { word: "weed",  phonemes: ["w",  "ee", "d"]  },
  { word: "feel",  phonemes: ["f",  "ee", "l"]  },
  { word: "heel",  phonemes: ["h",  "ee", "l"]  },
  { word: "peel",  phonemes: ["p",  "ee", "l"]  },
  { word: "reel",  phonemes: ["r",  "ee", "l"]  },
  { word: "feet",  phonemes: ["f",  "ee", "t"]  },
  { word: "meet",  phonemes: ["m",  "ee", "t"]  },
  { word: "beet",  phonemes: ["b",  "ee", "t"]  },
  { word: "keep",  phonemes: ["k",  "ee", "p"]  },
  { word: "deep",  phonemes: ["d",  "ee", "p"]  },
  { word: "seep",  phonemes: ["s",  "ee", "p"]  },
  { word: "week",  phonemes: ["w",  "ee", "k"]  },
  { word: "seek",  phonemes: ["s",  "ee", "k"]  },
  { word: "peek",  phonemes: ["p",  "ee", "k"]  },
  // ow/oi
  { word: "cow",   phonemes: ["k",  "ow"]       },
  { word: "bow",   phonemes: ["b",  "ow"]       },
  { word: "how",   phonemes: ["h",  "ow"]       },
  { word: "now",   phonemes: ["n",  "ow"]       },
  { word: "wow",   phonemes: ["w",  "ow"]       },
  { word: "boy",   phonemes: ["b",  "oi"]       },
  { word: "joy",   phonemes: ["j",  "oi"]       },
  { word: "toy",   phonemes: ["t",  "oi"]       },

  // ── 4-phoneme (CCVC / CVCC) ──────────────────────────────────────────────
  { word: "frog",  phonemes: ["f",  "r",  "o",  "g"]  },
  { word: "from",  phonemes: ["f",  "r",  "u",  "m"]  },
  { word: "flag",  phonemes: ["f",  "l",  "a",  "g"]  },
  { word: "flat",  phonemes: ["f",  "l",  "a",  "t"]  },
  { word: "flip",  phonemes: ["f",  "l",  "i",  "p"]  },
  { word: "flab",  phonemes: ["f",  "l",  "a",  "b"]  },
  { word: "clap",  phonemes: ["k",  "l",  "a",  "p"]  },
  { word: "clan",  phonemes: ["k",  "l",  "a",  "n"]  },
  { word: "clad",  phonemes: ["k",  "l",  "a",  "d"]  },
  { word: "clip",  phonemes: ["k",  "l",  "i",  "p"]  },
  { word: "clog",  phonemes: ["k",  "l",  "o",  "g"]  },
  { word: "club",  phonemes: ["k",  "l",  "u",  "b"]  },
  { word: "glad",  phonemes: ["g",  "l",  "a",  "d"]  },
  { word: "glam",  phonemes: ["g",  "l",  "a",  "m"]  },
  { word: "glob",  phonemes: ["g",  "l",  "o",  "b"]  },
  { word: "glop",  phonemes: ["g",  "l",  "o",  "p"]  },
  { word: "plan",  phonemes: ["p",  "l",  "a",  "n"]  },
  { word: "plop",  phonemes: ["p",  "l",  "o",  "p"]  },
  { word: "plug",  phonemes: ["p",  "l",  "u",  "g"]  },
  { word: "plum",  phonemes: ["p",  "l",  "u",  "m"]  },
  { word: "slug",  phonemes: ["s",  "l",  "u",  "g"]  },
  { word: "slim",  phonemes: ["s",  "l",  "i",  "m"]  },
  { word: "slap",  phonemes: ["s",  "l",  "a",  "p"]  },
  { word: "slab",  phonemes: ["s",  "l",  "a",  "b"]  },
  { word: "slip",  phonemes: ["s",  "l",  "i",  "p"]  },
  { word: "slot",  phonemes: ["s",  "l",  "o",  "t"]  },
  { word: "brag",  phonemes: ["b",  "r",  "a",  "g"]  },
  { word: "brat",  phonemes: ["b",  "r",  "a",  "t"]  },
  { word: "brad",  phonemes: ["b",  "r",  "a",  "d"]  },
  { word: "brim",  phonemes: ["b",  "r",  "i",  "m"]  },
  { word: "brig",  phonemes: ["b",  "r",  "i",  "g"]  },
  { word: "crop",  phonemes: ["k",  "r",  "o",  "p"]  },
  { word: "crab",  phonemes: ["k",  "r",  "a",  "b"]  },
  { word: "cram",  phonemes: ["k",  "r",  "a",  "m"]  },
  { word: "crag",  phonemes: ["k",  "r",  "a",  "g"]  },
  { word: "drip",  phonemes: ["d",  "r",  "i",  "p"]  },
  { word: "drag",  phonemes: ["d",  "r",  "a",  "g"]  },
  { word: "drop",  phonemes: ["d",  "r",  "o",  "p"]  },
  { word: "drug",  phonemes: ["d",  "r",  "u",  "g"]  },
  { word: "drum",  phonemes: ["d",  "r",  "u",  "m"]  },
  { word: "drub",  phonemes: ["d",  "r",  "u",  "b"]  },
  { word: "grip",  phonemes: ["g",  "r",  "i",  "p"]  },
  { word: "grit",  phonemes: ["g",  "r",  "i",  "t"]  },
  { word: "grab",  phonemes: ["g",  "r",  "a",  "b"]  },
  { word: "gram",  phonemes: ["g",  "r",  "a",  "m"]  },
  { word: "grim",  phonemes: ["g",  "r",  "i",  "m"]  },
  { word: "grub",  phonemes: ["g",  "r",  "u",  "b"]  },
  { word: "grug",  phonemes: ["g",  "r",  "u",  "g"]  },
  { word: "pram",  phonemes: ["p",  "r",  "a",  "m"]  },
  { word: "prop",  phonemes: ["p",  "r",  "o",  "p"]  },
  { word: "prod",  phonemes: ["p",  "r",  "o",  "d"]  },
  { word: "prig",  phonemes: ["p",  "r",  "i",  "g"]  },
  { word: "tram",  phonemes: ["t",  "r",  "a",  "m"]  },
  { word: "trap",  phonemes: ["t",  "r",  "a",  "p"]  },
  { word: "trim",  phonemes: ["t",  "r",  "i",  "m"]  },
  { word: "trip",  phonemes: ["t",  "r",  "i",  "p"]  },
  { word: "trig",  phonemes: ["t",  "r",  "i",  "g"]  },
  // CVCC
  { word: "band",  phonemes: ["b",  "a",  "n",  "d"]  },
  { word: "hand",  phonemes: ["h",  "a",  "n",  "d"]  },
  { word: "land",  phonemes: ["l",  "a",  "n",  "d"]  },
  { word: "sand",  phonemes: ["s",  "a",  "n",  "d"]  },
  { word: "bend",  phonemes: ["b",  "e",  "n",  "d"]  },
  { word: "fend",  phonemes: ["f",  "e",  "n",  "d"]  },
  { word: "lend",  phonemes: ["l",  "e",  "n",  "d"]  },
  { word: "mend",  phonemes: ["m",  "e",  "n",  "d"]  },
  { word: "rend",  phonemes: ["r",  "e",  "n",  "d"]  },
  { word: "send",  phonemes: ["s",  "e",  "n",  "d"]  },
  { word: "tend",  phonemes: ["t",  "e",  "n",  "d"]  },
  { word: "bind",  phonemes: ["b",  "ie", "n",  "d"]  },
  { word: "find",  phonemes: ["f",  "ie", "n",  "d"]  },
  { word: "kind",  phonemes: ["k",  "ie", "n",  "d"]  },
  { word: "mind",  phonemes: ["m",  "ie", "n",  "d"]  },
  { word: "wind",  phonemes: ["w",  "ie", "n",  "d"]  },
  { word: "bold",  phonemes: ["b",  "oe", "l",  "d"]  },
  { word: "cold",  phonemes: ["k",  "oe", "l",  "d"]  },
  { word: "fold",  phonemes: ["f",  "oe", "l",  "d"]  },
  { word: "gold",  phonemes: ["g",  "oe", "l",  "d"]  },
  { word: "hold",  phonemes: ["h",  "oe", "l",  "d"]  },
  { word: "mold",  phonemes: ["m",  "oe", "l",  "d"]  },
  { word: "sold",  phonemes: ["s",  "oe", "l",  "d"]  },
  { word: "told",  phonemes: ["t",  "oe", "l",  "d"]  },

  // ── 5-phoneme ────────────────────────────────────────────────────────────
  { word: "plant", phonemes: ["p",  "l",  "a",  "n",  "t"] },
  { word: "bland", phonemes: ["b",  "l",  "a",  "n",  "d"] },
  { word: "clamp", phonemes: ["k",  "l",  "a",  "m",  "p"] },
  { word: "clank", phonemes: ["k",  "l",  "a",  "ng", "k"] },
  { word: "crank", phonemes: ["k",  "r",  "a",  "ng", "k"] },
  { word: "cramp", phonemes: ["k",  "r",  "a",  "m",  "p"] },
  { word: "brand", phonemes: ["b",  "r",  "a",  "n",  "d"] },
  { word: "brant", phonemes: ["b",  "r",  "a",  "n",  "t"] },
  { word: "grant", phonemes: ["g",  "r",  "a",  "n",  "t"] },
  { word: "grand", phonemes: ["g",  "r",  "a",  "n",  "d"] },
  { word: "grind", phonemes: ["g",  "r",  "ie", "n",  "d"] },
  { word: "grasp", phonemes: ["g",  "r",  "a",  "s",  "p"] },
  { word: "crisp", phonemes: ["k",  "r",  "i",  "s",  "p"] },
  { word: "drift", phonemes: ["d",  "r",  "i",  "f",  "t"] },
  { word: "drink", phonemes: ["d",  "r",  "i",  "ng", "k"] },
  { word: "drip",  phonemes: ["d",  "r",  "i",  "p"]       },
  { word: "print", phonemes: ["p",  "r",  "i",  "n",  "t"] },
  { word: "prank", phonemes: ["p",  "r",  "a",  "ng", "k"] },
  { word: "frank", phonemes: ["f",  "r",  "a",  "ng", "k"] },
  { word: "flint", phonemes: ["f",  "l",  "i",  "n",  "t"] },
  { word: "flung", phonemes: ["f",  "l",  "u",  "ng"]      },
  { word: "fling", phonemes: ["f",  "l",  "i",  "ng"]      },
  { word: "stump", phonemes: ["s",  "t",  "u",  "m",  "p"] },
  { word: "stomp", phonemes: ["s",  "t",  "o",  "m",  "p"] },
  { word: "stamp", phonemes: ["s",  "t",  "a",  "m",  "p"] },
  { word: "stand", phonemes: ["s",  "t",  "a",  "n",  "d"] },
  { word: "sting", phonemes: ["s",  "t",  "i",  "ng"]      },
  { word: "stink", phonemes: ["s",  "t",  "i",  "ng", "k"] },
  { word: "stock", phonemes: ["s",  "t",  "o",  "k"]       },
  { word: "stick", phonemes: ["s",  "t",  "i",  "k"]       },
  { word: "stack", phonemes: ["s",  "t",  "a",  "k"]       },
  { word: "snack", phonemes: ["s",  "n",  "a",  "k"]       },
  { word: "snag",  phonemes: ["s",  "n",  "a",  "g"]       },
  { word: "snap",  phonemes: ["s",  "n",  "a",  "p"]       },
  { word: "snip",  phonemes: ["s",  "n",  "i",  "p"]       },
  { word: "smug",  phonemes: ["s",  "m",  "u",  "g"]       },
  { word: "smog",  phonemes: ["s",  "m",  "o",  "g"]       },
  { word: "swim",  phonemes: ["s",  "w",  "i",  "m"]       },
  { word: "swam",  phonemes: ["s",  "w",  "a",  "m"]       },
  { word: "swum",  phonemes: ["s",  "w",  "u",  "m"]       },
  { word: "swig",  phonemes: ["s",  "w",  "i",  "g"]       },
  { word: "twin",  phonemes: ["t",  "w",  "i",  "n"]       },
  { word: "twig",  phonemes: ["t",  "w",  "i",  "g"]       },

  // ── 6–8 phoneme ──────────────────────────────────────────────────────────
  { word: "splash",  phonemes: ["s",  "p",  "l",  "a",  "sh"]        },
  { word: "spring",  phonemes: ["s",  "p",  "r",  "i",  "ng"]        },
  { word: "sprint",  phonemes: ["s",  "p",  "r",  "i",  "n",  "t"]   },
  { word: "string",  phonemes: ["s",  "t",  "r",  "i",  "ng"]        },
  { word: "strap",   phonemes: ["s",  "t",  "r",  "a",  "p"]         },
  { word: "strip",   phonemes: ["s",  "t",  "r",  "i",  "p"]         },
  { word: "strut",   phonemes: ["s",  "t",  "r",  "u",  "t"]         },
  { word: "strong",  phonemes: ["s",  "t",  "r",  "o",  "ng"]        },
  { word: "strand",  phonemes: ["s",  "t",  "r",  "a",  "n",  "d"]   },
  { word: "shrimp",  phonemes: ["sh", "r",  "i",  "m",  "p"]         },
  { word: "shrink",  phonemes: ["sh", "r",  "i",  "ng", "k"]         },
  { word: "throb",   phonemes: ["th", "r",  "o",  "b"]               },
  { word: "thrill",  phonemes: ["th", "r",  "i",  "l"]               },
  { word: "scrimp",  phonemes: ["s",  "k",  "r",  "i",  "m",  "p"]   },
  { word: "script",  phonemes: ["s",  "k",  "r",  "i",  "p",  "t"]   },
  { word: "scrub",   phonemes: ["s",  "k",  "r",  "u",  "b"]         },
  { word: "scram",   phonemes: ["s",  "k",  "r",  "a",  "m"]         },
  { word: "screen",  phonemes: ["s",  "k",  "r",  "ee", "n"]         },
];

// ── Tricky / sight words ────────────────────────────────────────────────────
export const trickyWords = new Set([
  "the","was","said","they","of","to","do","are","were","be","have",
  "come","some","one","once","friend","school","water","people","want",
  "give","live","love","many","any","could","would","should","their",
  "there","where","what","who","why","how","when","which","does","gone",
  "done","none","eye","buy","by","laugh","half","calf","walk","talk",
  "could","would","put","full","pull","push","bull","both","most","host",
  "only","old","cold","find","mind","kind","wild","mild","child",
]);

// ── Derived indexes ─────────────────────────────────────────────────────────

/** phoneme-key → word string */
export const phonemeKeyToWord = new Map(
  wordList.map(({ word, phonemes }) => [phonemes.join("|"), word])
);

/** phoneme count → array of word entries */
export const wordsByCount = wordList.reduce((acc, entry) => {
  const n = entry.phonemes.length;
  if (!acc[n]) acc[n] = [];
  acc[n].push(entry);
  return acc;
}, {});

/** All unique phoneme tokens in the dataset */
export const allPhonemes = [...new Set(wordList.flatMap(e => e.phonemes))];

/**
 * Given a word's phoneme array and a position index, return all phoneme
 * tokens (different from the current one) that produce a valid word.
 */
export function getValidSwaps(phonemes, position) {
  const current = phonemes[position];
  return allPhonemes
    .filter(p => p !== current)
    .filter(p => {
      const candidate = [...phonemes];
      candidate[position] = p;
      return phonemeKeyToWord.has(candidate.join("|"));
    })
    .map(p => {
      const candidate = [...phonemes];
      candidate[position] = p;
      return { phoneme: p, word: phonemeKeyToWord.get(candidate.join("|")) };
    });
}

/**
 * Pick a random word entry with exactly `count` phonemes.
 * Returns null if none available.
 */
export function randomWordByCount(count) {
  const pool = wordsByCount[count];
  if (!pool || pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Pick a random non-tricky word entry with exactly `count` phonemes.
 * Falls back to any word if all words are tricky.
 */
export function randomNonTrickyWordByCount(count) {
  const pool = (wordsByCount[count] ?? []).filter(e => !trickyWords.has(e.word));
  if (pool.length === 0) return randomWordByCount(count);
  return pool[Math.floor(Math.random() * pool.length)];
}
