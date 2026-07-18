import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Container } from '../../../../com/typesafe/config/impl/Container.d.ts'
import type { ResolveResult } from '../../../../com/typesafe/config/impl/ResolveResult.d.ts'
import type { ResolveSource$Node } from '../../../../com/typesafe/config/impl/ResolveSource$Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResolveSource$ResultWithPath extends Object {
    constructor(arg0: ResolveResult<AbstractConfigValue>, arg1: ResolveSource$Node<Container>)
    // private pathFromRoot: ResolveSource$Node<Container>;
    // private result: ResolveResult<AbstractConfigValue>;
    toString(): string;
}