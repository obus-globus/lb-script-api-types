import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { GenericArrayType } from '../../../../java/lang/reflect/GenericArrayType.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Types$GenericArrayTypeImpl extends Object implements Serializable, GenericArrayType {
    constructor(componentType: Type)
    // private componentType: Type;
    equals(obj: Object | null): boolean;
    getGenericComponentType(): Type;
    hashCode(): number;
    toString(): string;
}