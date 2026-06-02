import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ParameterizedType extends Type, Object{
    getActualTypeArguments(): Type[];
    getOwnerType(): Type;
    getRawType(): Type;
    getTypeName(): string;
}