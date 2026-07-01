import type { GenericArrayType } from '../../../../../java/lang/reflect/GenericArrayType.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeUtils$GenericArrayTypeImpl extends Object implements GenericArrayType {
    constructor(arg0: Type, arg1: any)
    // private componentType: Type;
    equals(arg0: Object | null): boolean;
    getGenericComponentType(): Type;
    hashCode(): number;
    toString(): string;
}