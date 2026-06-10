import type { SupertypeLoopChecker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { DeserializedClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedClassDescriptor.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { AbstractClassTypeConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractClassTypeConstructor.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class DeserializedClassDescriptor$DeserializedClassTypeConstructor extends AbstractClassTypeConstructor {
    constructor(null_: DeserializedClassDescriptor$DeserializedClassTypeConstructor)
    readonly parameters: NotNullLazyValue<TypeParameterDescriptor[]>;
    computeSupertypes(): KotlinType[];
    getDeclarationDescriptor(): DeserializedClassDescriptor;
    getParameters(): TypeParameterDescriptor[];
    getSupertypeLoopChecker(): SupertypeLoopChecker;
    isDenotable(): boolean;
    toString(): string;
}