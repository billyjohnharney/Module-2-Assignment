/** Human-readable label for each phoneme key */
export const phonemeLabel = {
  // short vowels
  a:   'a',   e:   'e',   i:   'i',   o:   'o',   u:   'u',
  // long vowels
  ay:  'ay',  ee:  'ee',  ie:  'ie',  oe:  'oe',  oo:  'oo',
  // other vowels
  oo2: 'oo',  ow:  'ow',  oi:  'oi',  er:  'er',
  // consonants
  b:   'b',   ch:  'ch',  d:   'd',   f:   'f',   g:   'g',
  h:   'h',   j:   'j',   k:   'k',   l:   'l',   m:   'm',
  n:   'n',   ng:  'ng',  p:   'p',   r:   'r',   s:   's',
  sh:  'sh',  t:   't',   th:  'th',  v:   'v',   w:   'w',
  y:   'y',   z:   'z',
};

const VOWELS = new Set([
  'a','e','i','o','u','ay','ee','ie','oe','oo','oo2','ow','oi','er'
]);

/** 'vowel' | 'digraph' | 'consonant' */
export function phonemeType(key) {
  if (VOWELS.has(key)) return 'vowel';
  if (key.length > 1)  return 'digraph';
  return 'consonant';
}
