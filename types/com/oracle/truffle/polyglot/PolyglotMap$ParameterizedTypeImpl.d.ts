import type { ParameterizedType } from '../../../../java/lang/reflect/ParameterizedType.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotMap$ParameterizedTypeImpl extends Object implements ParameterizedType {
    constructor(rawType: Type, typeParameters: Type[])
    readonly rawType: Type;
    // private typeParameters: Type[];
    equals(obj: Object | null): boolean;
    getActualTypeArguments(): Type[];
    getOwnerType(): Type;
    getRawType(): Type;
    hashCode(): number;
}