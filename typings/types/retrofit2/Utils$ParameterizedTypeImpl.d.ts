import type { ParameterizedType } from '../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../java/lang/reflect/Type.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class Utils$ParameterizedTypeImpl extends Object implements ParameterizedType {
    constructor(arg0: Type, arg1: Type, ...arg2: Type[])
    readonly ownerType: Type;
    readonly rawType: Type;
    // private typeArguments: Type[];
    equals(arg0: Object | null): boolean;
    getActualTypeArguments(): Type[];
    getOwnerType(): Type;
    getRawType(): Type;
    hashCode(): number;
    toString(): string;
}