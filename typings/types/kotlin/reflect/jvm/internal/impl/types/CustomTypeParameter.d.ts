import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface CustomTypeParameter extends Object{
    isTypeParameter(): boolean;
    substitutionResult(arg0: KotlinType): KotlinType;
}