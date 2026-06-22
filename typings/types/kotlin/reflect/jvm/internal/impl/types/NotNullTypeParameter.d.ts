import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CustomTypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/CustomTypeParameter.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface NotNullTypeParameter extends Object, CustomTypeParameter{
    isTypeParameter(): boolean;
    substitutionResult(arg0: KotlinType): KotlinType;
}