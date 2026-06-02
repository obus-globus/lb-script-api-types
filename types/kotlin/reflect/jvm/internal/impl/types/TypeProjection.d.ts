import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { TypeArgumentMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentMarker.d.ts'
export interface TypeProjection extends Object, TypeArgumentMarker{
    getProjectionKind(): Variance;
    getType(): KotlinType;
    isStarProjection(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeProjection;
}