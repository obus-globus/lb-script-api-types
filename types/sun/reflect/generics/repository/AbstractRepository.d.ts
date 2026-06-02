import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GenericsFactory } from '../../../../sun/reflect/generics/factory/GenericsFactory.d.ts'
import type { Tree } from '../../../../sun/reflect/generics/tree/Tree.d.ts'
import type { Reifier } from '../../../../sun/reflect/generics/visitor/Reifier.d.ts'
export abstract class AbstractRepository<T extends Tree> extends Object {
    constructor(arg0: string, arg1: GenericsFactory)
    // private factory: GenericsFactory;
    // private tree: T;
    // private getFactory(): GenericsFactory;
    getReifier(): Reifier;
    getTree(): T;
    parse(arg0: string): T;
}