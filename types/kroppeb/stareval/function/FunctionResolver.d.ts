import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
import type { TypedFunction } from '../../../kroppeb/stareval/function/TypedFunction.d.ts'
export class FunctionResolver extends Object {
    constructor(arg0: { [key: string]: Map<Type, TypedFunction[]> }, arg1: { [key: string]: Map<Type, () => TypedFunction[]> })
    // private dynamicFunctions: { [key: string]: Map<Type, () => TypedFunction[]> };
    // private functions: { [key: string]: Map<Type, TypedFunction[]> };
    logAllFunctions(): void;
    resolve(arg0: string, arg1: Type): TypedFunction[];
}