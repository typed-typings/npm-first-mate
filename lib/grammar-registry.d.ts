import EventKit = require('event-kit');

import Grammar = require('./grammar');

import GrammarEventHandler = require('./grammar-event-handler');

declare class GrammarRegistry {
  onDidAddGrammar: GrammarEventHandler;
  onDidUpdateGrammar: GrammarEventHandler;
  getGrammars(): Grammar[];
  grammarForScopeName(scopeName: string): Grammar;
  addGrammar(grammar: Grammar): EventKit.Disposable;
  removeGrammarForScopeName(scopeName: string): Grammar;
  readGrammarSync(grammarPath: string): Grammar;
  readGrammar(grammarPath: string, callback: (err: Error, grammar: Grammar) => void): void;
  loadGrammarSync(grammarPath: string): Grammar;
  loadGrammar(grammarPath: string, callback: (err: Error, grammar: Grammar) => void): void;
}

export = GrammarRegistry;
