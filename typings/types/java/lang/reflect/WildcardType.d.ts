import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WildcardType extends Type, Object{
    getLowerBounds(): Type[];
    getTypeName(): string;
    getUpperBounds(): Type[];
}