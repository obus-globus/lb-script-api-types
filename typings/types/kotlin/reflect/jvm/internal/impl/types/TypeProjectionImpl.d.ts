import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeProjectionBase } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjectionBase.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class TypeProjectionImpl extends TypeProjectionBase {
    constructor(arg0: KotlinType)
    constructor(arg0: Variance, arg1: KotlinType)
    // private projection: Variance;
    readonly type: KotlinType;
    getProjectionKind(): Variance;
    getType(): KotlinType;
    isStarProjection(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeProjection;
}