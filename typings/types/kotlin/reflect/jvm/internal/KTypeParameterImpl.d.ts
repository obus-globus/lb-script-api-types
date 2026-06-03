import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVariance } from '../../../../kotlin/reflect/KVariance.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { TypeParameterDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { TypeConstructorMarker } from '../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeParameterMarker } from '../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
export class KTypeParameterImpl extends Object implements KTypeParameter, TypeConstructorMarker, TypeParameterMarker {
    constructor(container: KTypeParameterOwnerImpl, name: string, variance: KVariance, isReified: boolean)
    constructor(container: KTypeParameterOwnerImpl | null, descriptor: TypeParameterDescriptor)
    private constructor(descriptor: TypeParameterDescriptor | null, _container: KTypeParameterOwnerImpl | null, computeContainer: () => KTypeParameterOwnerImpl | null, name: string, variance: KVariance, isReified: boolean)
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}