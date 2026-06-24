import type { KTypeParameterBase } from '../../../../kotlin/jvm/internal/KTypeParameterBase.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KVariance } from '../../../../kotlin/reflect/KVariance.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { TypeParameterDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { TypeConstructorMarker } from '../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
import type { TypeParameterMarker } from '../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
export class KTypeParameterImpl extends KTypeParameterBase implements TypeConstructorMarker, TypeParameterMarker {
    constructor(container: KTypeParameterOwnerImpl, name: string, variance: KVariance, isReified: boolean)
    constructor(container: KTypeParameterOwnerImpl, descriptor: TypeParameterDescriptor)
    private constructor(descriptor: TypeParameterDescriptor | null, container: KTypeParameterOwnerImpl, name: string, variance: KVariance, isReified: boolean)
    // private _descriptor: TypeParameterDescriptor | null;
    readonly descriptor: TypeParameterDescriptor;
    // private isReified: boolean;
    /*not mapped: */ isReified(): boolean;
    readonly name: string;
    upperBounds: KType[];
    readonly variance: KVariance;
}