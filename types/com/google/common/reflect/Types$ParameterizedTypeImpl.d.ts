import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ParameterizedType } from '../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Types$ParameterizedTypeImpl extends Object implements Serializable, ParameterizedType {
    constructor(ownerType: Type, rawType: Class<Object>, typeArguments: Type[])
    // private argumentsList: Type[];
    readonly ownerType: Type;
    readonly rawType: Class<Object>;
    equals(other: Object | null): boolean;
    getActualTypeArguments(): Type[];
    getOwnerType(): Type;
    getRawType(): Type;
    hashCode(): number;
    toString(): string;
}