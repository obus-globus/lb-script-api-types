import type { Class } from '../../java/lang/Class.d.ts'
import type { ParameterizedType } from '../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { TypeImpl } from '../../kotlin/reflect/TypeImpl.d.ts'
export class ParameterizedTypeImpl extends Object implements ParameterizedType, TypeImpl {
    constructor(rawType: Class<Object>, ownerType: Type | null, typeArguments: Type[])
    readonly ownerType: Type | null;
    readonly rawType: Class<Object>;
    // private typeArguments: Type[];
    equals(other: Object | null): boolean;
    getActualTypeArguments(): Type[];
    getOwnerType(): Type | null;
    getRawType(): Type;
    getTypeName(): string;
    hashCode(): number;
    toString(): string;
}