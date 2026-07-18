import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
export class ConfigNodePath extends AbstractConfigNode {
    constructor(arg0: Path, arg1: Token[])
    // private path: Path;
    // private tokens: Token[];
    first(): ConfigNodePath;
    subPath(arg0: number): ConfigNodePath;
    tokens(): Token[];
    value(): Path;
}