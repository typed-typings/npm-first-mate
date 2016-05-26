import EventKit = require('event-kit');

import GrammarRegistry = require('./grammar-registry');

declare class Grammar {
  constructor(registry: GrammarRegistry, options?: Object);

  onDidUpdate: (callback: () => void) => EventKit.Disposable;
  tokenizeLines(text: string): any[];
  tokenizeLine(line: string, ruleStack?: any[], firstLine?: boolean): {
    line: string;
    tags: number[];
    tokens(): any;
    ruleStack: any[];
  };
}

export = Grammar;
