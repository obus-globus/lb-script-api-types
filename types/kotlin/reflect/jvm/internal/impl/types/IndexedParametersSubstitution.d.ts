import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { TypeSubstitution$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution$Companion.d.ts'
export class IndexedParametersSubstitution extends TypeSubstitution {
    static Companion: TypeSubstitution$Companion;
    static EMPTY: TypeSubstitution;
    constructor(arg0: TypeParameterDescriptor[], arg1: TypeProjection[])
    constructor(arg0: TypeParameterDescriptor[], arg1: TypeProjection[], arg2: boolean)
    // private approximateContravariantCapturedTypes: boolean;
    readonly arguments: TypeProjection[];
    readonly parameters: TypeParameterDescriptor[];
    approximateContravariantCapturedTypes(): boolean;
    get(arg0: KotlinType): TypeProjection;
    getArguments(): TypeProjection[];
    getParameters(): TypeParameterDescriptor[];
    isEmpty(): boolean;
}