import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export abstract class TypeProjectionBase extends Object implements TypeProjection {
    constructor()
    equals(arg0: Object | null): boolean;
    getProjectionKind(): Variance;
    getType(): KotlinType;
    hashCode(): number;
    isStarProjection(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeProjection;
    toString(): string;
}