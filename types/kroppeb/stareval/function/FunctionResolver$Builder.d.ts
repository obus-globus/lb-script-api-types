import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionResolver } from '../../../kroppeb/stareval/function/FunctionResolver.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
import type { TypedFunction } from '../../../kroppeb/stareval/function/TypedFunction.d.ts'
export class FunctionResolver$Builder extends Object {
    constructor()
    // private dynamicFunctions: { [key: string]: Map<Type, () => TypedFunction[]> };
    // private functions: { [key: string]: TypedFunction[] };
    add<T extends TypedFunction>(arg0: string, arg1: T): void;
    addDynamic(arg0: string, arg1: Type, arg2: () => T): void;
    addDynamicFunction(arg0: string, arg1: Type, arg2: () => TypedFunction): void;
    addFunction(arg0: string, arg1: TypedFunction): void;
    build(): FunctionResolver;
}