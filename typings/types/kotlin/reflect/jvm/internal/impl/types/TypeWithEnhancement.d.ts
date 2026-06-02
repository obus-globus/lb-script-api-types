import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
export interface TypeWithEnhancement extends Object{
    getEnhancement(): KotlinType;
    getOrigin(): UnwrappedType;
}