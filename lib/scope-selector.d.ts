declare class ScopeSelector {
  constructor(source: string);

  matches(scopes: string | string[]) : boolean;
  toCssSelector(): string;
}

export = ScopeSelector;
