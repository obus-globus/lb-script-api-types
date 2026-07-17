import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ProtoBuf$Constructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { MessageLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { AnnotatedCallableKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotatedCallableKind.d.ts'
import type { AnnotationDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/AnnotationDeserializer.d.ts'
import type { DeserializationContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationContext.d.ts'
import type { ProtoContainer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer.d.ts'
import type { DeserializedSimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedSimpleFunctionDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class MemberDeserializer extends Object {
    constructor(arg0: DeserializationContext)
    // private annotationDeserializer: AnnotationDeserializer;
    // private c: DeserializationContext;
    // private asProtoContainer(arg0: DeclarationDescriptor): ProtoContainer;
    // private contextReceivers(arg0: ProtoBuf$Type[], arg1: ProtoBuf$ValueParameter[], arg2: MessageLite, arg3: AnnotatedCallableKind): ReceiverParameterDescriptor[];
    // private getAnnotations(arg0: MessageLite, arg1: number, arg2: AnnotatedCallableKind): AnnotationDescriptor[];
    // private getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    // private getPropertyFieldAnnotations(arg0: ProtoBuf$Property, arg1: boolean): AnnotationDescriptor[];
    // private getReceiverParameterAnnotations(arg0: MessageLite, arg1: AnnotatedCallableKind): AnnotationDescriptor[];
    // private initializeWithCoroutinesExperimentalityStatus(arg0: DeserializedSimpleFunctionDescriptor, arg1: ReceiverParameterDescriptor, arg2: ReceiverParameterDescriptor, arg3: ReceiverParameterDescriptor[], arg4: TypeParameterDescriptor[], arg5: ValueParameterDescriptor[], arg6: KotlinType, arg7: Modality, arg8: DescriptorVisibility, arg9: JavaMap<CallableDescriptor$UserDataKey<Object>, Object | null>): void;
    loadConstructor(arg0: ProtoBuf$Constructor, arg1: boolean): ClassConstructorDescriptor;
    loadFunction(arg0: ProtoBuf$Function): SimpleFunctionDescriptor;
    // private loadOldFlags(arg0: number): number;
    loadProperty(arg0: ProtoBuf$Property, arg1: boolean): PropertyDescriptor;
    loadTypeAlias(arg0: ProtoBuf$TypeAlias): TypeAliasDescriptor;
    // private valueParameters(arg0: ProtoBuf$ValueParameter[], arg1: MessageLite, arg2: AnnotatedCallableKind): ValueParameterDescriptor[];
}