import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { AbstractConfigNodeValue } from '../../../../com/typesafe/config/impl/AbstractConfigNodeValue.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
export abstract class ConfigNodeComplexValue extends AbstractConfigNodeValue {
    constructor(arg0: AbstractConfigNode[])
    constructor(arg0: AbstractConfigNode[], arg1: ConfigOrigin)
    // private children: AbstractConfigNode[];
    // private origin: ConfigOrigin;
    children(): AbstractConfigNode[];
    indentText(arg0: AbstractConfigNode): ConfigNodeComplexValue;
    newNode(arg0: AbstractConfigNode[]): ConfigNodeComplexValue;
    origin(): ConfigOrigin;
    tokens(): Token[];
}