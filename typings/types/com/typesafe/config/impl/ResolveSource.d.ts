import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Container } from '../../../../com/typesafe/config/impl/Container.d.ts'
import type { ResolveContext } from '../../../../com/typesafe/config/impl/ResolveContext.d.ts'
import type { ResolveSource$Node } from '../../../../com/typesafe/config/impl/ResolveSource$Node.d.ts'
import type { ResolveSource$ResultWithPath } from '../../../../com/typesafe/config/impl/ResolveSource$ResultWithPath.d.ts'
import type { SubstitutionExpression } from '../../../../com/typesafe/config/impl/SubstitutionExpression.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResolveSource extends Object {
    constructor(arg0: JavaMap<any, any>)
    constructor(arg0: JavaMap<any, any>, arg1: ResolveSource$Node<Container>)
    // private pathFromRoot: ResolveSource$Node<Container>;
    // private root: JavaMap<any, any>;
    lookupSubst(arg0: ResolveContext, arg1: SubstitutionExpression, arg2: number): ResolveSource$ResultWithPath;
    pushParent(arg0: Container): ResolveSource;
    replaceCurrentParent(arg0: Container, arg1: Container): ResolveSource;
    replaceWithinCurrentParent(arg0: AbstractConfigValue, arg1: AbstractConfigValue): ResolveSource;
    resetParents(): ResolveSource;
    // private rootMustBeObj(arg0: Container): JavaMap<any, any>;
    toString(): string;
}