import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AbstractLazyTypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractLazyTypeParameterDescriptor.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { DeserializationContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationContext.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class DeserializedTypeParameterDescriptor extends AbstractLazyTypeParameterDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeserializationContext, arg1: ProtoBuf$TypeParameter, arg2: number)
    readonly annotations: (Object | null)[];
    // private c: DeserializationContext;
    // private proto: ProtoBuf$TypeParameter;
    getAnnotations(): (Object | null)[];
    reportSupertypeLoopError(arg0: KotlinType): void;
    resolveUpperBounds(): KotlinType[];
}