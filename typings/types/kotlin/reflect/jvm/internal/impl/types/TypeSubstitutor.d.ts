import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
import type { TypeSubstitutorMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSubstitutorMarker.d.ts'
export class TypeSubstitutor extends Object implements TypeSubstitutorMarker {
    static EMPTY: TypeSubstitutor;
    static combine(paramarg0: Variance, paramarg1: TypeProjection): Variance;
    static combine(paramarg0: Variance, paramarg1: Variance): Variance;
    static create(paramarg0: JavaMap<TypeConstructor, TypeProjection>): TypeSubstitutor;
    static create(paramarg0: KotlinType): TypeSubstitutor;
    static create(paramarg0: TypeSubstitution): TypeSubstitutor;
    static createChainedSubstitutor(paramarg0: TypeSubstitution, paramarg1: TypeSubstitution): TypeSubstitutor;
    constructor(arg0: TypeSubstitution)
    readonly substitution: TypeSubstitution;
    getSubstitution(): TypeSubstitution;
    isEmpty(): boolean;
    replaceWithNonApproximatingSubstitution(): TypeSubstitutor;
    safeSubstitute(arg0: KotlinType, arg1: Variance): KotlinType;
    substitute(arg0: KotlinType, arg1: Variance): KotlinType;
    substitute(arg0: TypeProjection): TypeProjection;
    // private substituteCompoundType(arg0: TypeProjection, arg1: number): TypeProjection;
    // private substituteTypeArguments(arg0: TypeParameterDescriptor[], arg1: TypeProjection[], arg2: number): TypeProjection[];
    substituteWithoutApproximation(arg0: TypeProjection): TypeProjection;
    // private unsafeSubstitute(arg0: TypeProjection, arg1: TypeParameterDescriptor, arg2: number): TypeProjection;
}