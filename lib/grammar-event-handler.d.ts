import EventKit = require('event-kit');
import Grammar = require('./grammar');

declare interface GrammarEventHandler {
  (callback: (grammar: Grammar) => void): EventKit.Disposable;
}


export = GrammarEventHandler;
