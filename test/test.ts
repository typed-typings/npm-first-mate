import tape = require('blue-tape');

import FirstMate = require('first-mate');

tape('Check classes', (test) => {
  test.plan(3);
  let gr = new FirstMate.GrammarRegistry();
  let g = new FirstMate.Grammar(gr);
  let ss = new FirstMate.ScopeSelector('abc');

  test.assert(gr instanceof FirstMate.GrammarRegistry);
  test.assert(g instanceof FirstMate.Grammar);
  test.assert(ss instanceof FirstMate.ScopeSelector);
});
