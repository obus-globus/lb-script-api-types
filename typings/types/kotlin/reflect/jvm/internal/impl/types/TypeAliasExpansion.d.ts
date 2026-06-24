import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { TypeAliasExpansion$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAliasExpansion$Companion.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
export class TypeAliasExpansion extends Object {
    static Companion: TypeAliasExpansion$Companion;
    private constructor(arg0: TypeAliasExpansion, arg1: TypeAliasDescriptor, arg2: TypeProjection[], arg3: Map<TypeParameterDescriptor, TypeProjection>)
    constructor(arg0: TypeAliasExpansion, arg1: TypeAliasDescriptor, arg2: (Object | null)[], arg3: Map<Object | null, Object | null>, arg4: DefaultConstructorMarker)
    readonly arguments: TypeProjection[];
    readonly descriptor: TypeAliasDescriptor;
    // private mapping: Map<TypeParameterDescriptor, TypeProjection>;
    // private parent: TypeAliasExpansion;
    getArguments(): TypeProjection[];
    getDescriptor(): TypeAliasDescriptor;
    getReplacement(arg0: TypeConstructor): TypeProjection;
    isRecursion(arg0: TypeAliasDescriptor): boolean;
}