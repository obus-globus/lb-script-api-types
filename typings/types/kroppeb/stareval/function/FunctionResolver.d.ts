import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
import type { TypedFunction } from '../../../kroppeb/stareval/function/TypedFunction.d.ts'
export class FunctionResolver extends Object {
    constructor(arg0: JavaMap<string, JavaMap<Type, TypedFunction[]>>, arg1: JavaMap<string, JavaMap<Type, () => TypedFunction[]>>)
    // private dynamicFunctions: JavaMap<string, JavaMap<Type, () => TypedFunction[]>>;
    // private functions: JavaMap<string, JavaMap<Type, TypedFunction[]>>;
    logAllFunctions(): void;
    resolve(arg0: string, arg1: Type): TypedFunction[];
}