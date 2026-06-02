import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface KotlinTypeChecker extends Object{
    equalTypes(arg0: KotlinType, arg1: KotlinType): boolean;
    isSubtypeOf(arg0: KotlinType, arg1: KotlinType): boolean;
}