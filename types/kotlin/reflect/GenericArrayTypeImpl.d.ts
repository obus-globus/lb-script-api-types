import type { GenericArrayType } from '../../java/lang/reflect/GenericArrayType.d.ts'
import type { Type } from '../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { TypeImpl } from '../../kotlin/reflect/TypeImpl.d.ts'
export class GenericArrayTypeImpl extends Object implements GenericArrayType, TypeImpl {
    constructor(elementType: Type)
    // private elementType: Type;
    equals(other: Object | null): boolean;
    getGenericComponentType(): Type;
    getTypeName(): string;
    hashCode(): number;
    toString(): string;
}