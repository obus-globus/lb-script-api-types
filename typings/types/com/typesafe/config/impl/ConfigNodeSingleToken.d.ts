import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
export class ConfigNodeSingleToken extends AbstractConfigNode {
    constructor(arg0: Token)
    // private token: Token;
    token(): Token;
    tokens(): Token[];
}