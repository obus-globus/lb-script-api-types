import type { Object } from '../../../java/lang/Object.d.ts'
import type { Type } from '../../../kroppeb/stareval/function/Type.d.ts'
export class TypedFunction$Parameter extends Object {
    constructor(arg0: Type)
    constructor(arg0: Type, arg1: boolean)
    // private isConstant: boolean;
    // private type: Type;
    constant(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    type(): Type;
}