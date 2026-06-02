import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { ApproximationBounds } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/typesApproximation/ApproximationBounds.d.ts'
export class CapturedTypeApproximationKt extends Object {
    static approximateCapturedTypes(paramarg0: KotlinType): ApproximationBounds<KotlinType>;
    static approximateCapturedTypesIfNecessary(paramarg0: TypeProjection, paramarg1: boolean): TypeProjection;
}