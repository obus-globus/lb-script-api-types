import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TypeResolver$TypeVariableKey extends Object {
    constructor(var_: TypeVariable<Object>)
    // private var: TypeVariable<Object>;
    equals(obj: Object | null): boolean;
    equalsType(type: Type): boolean;
    // private equalsTypeVariable(that: TypeVariable<Object>): boolean;
    hashCode(): number;
    toString(): string;
}