import type { Object } from '../../../java/lang/Object.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
import type { TypedFunction } from '../../../kroppeb/stareval/function/TypedFunction.d.ts'
import type { TypedFunction$Parameter } from '../../../kroppeb/stareval/function/TypedFunction$Parameter.d.ts'
export abstract class AbstractTypedFunction extends Object implements TypedFunction {
    constructor(arg0: Type, arg1: Type[])
    constructor(arg0: Type, arg1: TypedFunction$Parameter[], arg2: number, arg3: boolean)
    // private isPure: boolean;
    readonly parameters: TypedFunction$Parameter[];
    // private priority: number;
    readonly returnType: Type;
    equals(arg0: Object | null): boolean;
    getParameters(): TypedFunction$Parameter[];
    getReturnType(): Type;
    hashCode(): number;
    isPure(): boolean;
    priority(): number;
    toString(): string;
}