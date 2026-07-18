import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { AbstractConfigNodeValue } from '../../../../com/typesafe/config/impl/AbstractConfigNodeValue.d.ts'
import type { ConfigNodePath } from '../../../../com/typesafe/config/impl/ConfigNodePath.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
export class ConfigNodeField extends AbstractConfigNode {
    constructor(arg0: AbstractConfigNode[])
    // private children: AbstractConfigNode[];
    comments(): string[];
    newlineCountBeforeValue(): number;
    path(): ConfigNodePath;
    replaceValue(arg0: AbstractConfigNodeValue): ConfigNodeField;
    separator(): Token;
    tokens(): Token[];
    value(): AbstractConfigNodeValue;
}