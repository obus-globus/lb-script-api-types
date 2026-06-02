import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeCheckingProcedureCallbacks } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/TypeCheckingProcedureCallbacks.d.ts'
export class TypeCheckingProcedure extends Object {
    static findCorrespondingSupertype(paramarg0: KotlinType, paramarg1: KotlinType): KotlinType;
    static findCorrespondingSupertype(paramarg0: KotlinType, paramarg1: KotlinType, paramarg2: TypeCheckingProcedureCallbacks): KotlinType;
}