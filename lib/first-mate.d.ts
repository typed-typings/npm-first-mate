import GrammarS = require('./grammar');
import GrammarRegistryS = require('./grammar-registry');
import ScopeSelectorS = require('./scope-selector');
import GrammarEventHandlerS = require('./grammar-event-handler');

declare namespace FirstMate {
  export class Grammar extends GrammarS {}
  export class GrammarRegistry extends GrammarRegistryS {}
  export class ScopeSelector extends ScopeSelectorS {}
  export interface GrammarEventHandler extends GrammarEventHandlerS {}
}

export = FirstMate;
