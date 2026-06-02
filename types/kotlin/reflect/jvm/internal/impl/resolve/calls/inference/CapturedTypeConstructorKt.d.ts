import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeSubstitution } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
export class CapturedTypeConstructorKt extends Object {
    static createCapturedType(paramarg0: TypeProjection): KotlinType;
    static isCaptured(paramarg0: KotlinType): boolean;
    static wrapWithCapturingSubstitution(paramarg0: TypeSubstitution, paramarg1: boolean): TypeSubstitution;
}