import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ParameterizedType } from '../../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypeUtils$ParameterizedTypeImpl extends Object implements ParameterizedType {
    private constructor(arg0: Class<Object>, arg1: Type, arg2: Type[])
    // private raw: Class<Object>;
    // private typeArguments: Type[];
    // private useOwner: Type;
    equals(arg0: Object | null): boolean;
    getActualTypeArguments(): Type[];
    getOwnerType(): Type;
    getRawType(): Type;
    hashCode(): number;
    toString(): string;
}