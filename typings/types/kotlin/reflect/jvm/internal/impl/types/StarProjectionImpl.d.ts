import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../kotlin/Lazy.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeProjectionBase } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjectionBase.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class StarProjectionImpl extends TypeProjectionBase {
    constructor(arg0: TypeParameterDescriptor)
    // private _type$delegate: Lazy<Object>;
    // private typeParameter: TypeParameterDescriptor;
    getProjectionKind(): Variance;
    getType(): KotlinType;
    // private get_type(): KotlinType;
    isStarProjection(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeProjection;
}