import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { ConfigNode } from '../../../../com/typesafe/config/parser/ConfigNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractConfigNode extends Object implements ConfigNode {
    constructor()
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    render(): string;
    tokens(): Token[];
}