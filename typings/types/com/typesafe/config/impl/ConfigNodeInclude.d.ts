import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { ConfigIncludeKind } from '../../../../com/typesafe/config/impl/ConfigIncludeKind.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
export class ConfigNodeInclude extends AbstractConfigNode {
    constructor(arg0: AbstractConfigNode[], arg1: ConfigIncludeKind, arg2: boolean)
    // private children: AbstractConfigNode[];
    // private isRequired: boolean;
    // private kind: ConfigIncludeKind;
    children(): AbstractConfigNode[];
    isRequired(): boolean;
    kind(): ConfigIncludeKind;
    name(): string;
    tokens(): Token[];
}