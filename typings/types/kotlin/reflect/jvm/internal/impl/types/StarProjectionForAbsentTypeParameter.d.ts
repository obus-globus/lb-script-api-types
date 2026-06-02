import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeProjectionBase } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjectionBase.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class StarProjectionForAbsentTypeParameter extends TypeProjectionBase {
    constructor(arg0: KotlinBuiltIns)
    // private nullableAnyType: KotlinType;
    getProjectionKind(): Variance;
    getType(): KotlinType;
    isStarProjection(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeProjection;
}