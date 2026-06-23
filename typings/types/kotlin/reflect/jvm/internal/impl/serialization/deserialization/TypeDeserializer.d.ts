import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$Type$Argument } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { DeserializationContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationContext.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeAttributeTranslator } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttributeTranslator.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
export class TypeDeserializer extends Object {
    constructor(arg0: DeserializationContext, arg1: TypeDeserializer, arg2: ProtoBuf$TypeParameter[], arg3: string, arg4: string)
    // private c: DeserializationContext;
    // private classifierDescriptors: (param0: number) => ClassifierDescriptor;
    // private containerPresentableName: string;
    // private debugName: string;
    // private parent: TypeDeserializer;
    // private typeAliasDescriptors: (param0: number) => ClassifierDescriptor;
    // private typeParameterDescriptors: { [key: number]: TypeParameterDescriptor };
    // private computeClassifierDescriptor(arg0: number): ClassifierDescriptor;
    // private computeLocalClassifierReplacementType(arg0: number): SimpleType;
    // private computeTypeAliasDescriptor(arg0: number): ClassifierDescriptor;
    // private createSimpleSuspendFunctionType(arg0: KotlinType, arg1: KotlinType): SimpleType;
    // private createSuspendFunctionType(arg0: TypeAttribute<any>[], arg1: TypeConstructor, arg2: TypeProjection[], arg3: boolean): SimpleType;
    // private createSuspendFunctionTypeForBasicCase(arg0: TypeAttribute<any>[], arg1: TypeConstructor, arg2: TypeProjection[], arg3: boolean): SimpleType;
    getOwnTypeParameters(): TypeParameterDescriptor[];
    // private loadTypeParameter(arg0: number): TypeParameterDescriptor;
    simpleType(arg0: ProtoBuf$Type, arg1: boolean): SimpleType;
    // private toAttributes(arg0: TypeAttributeTranslator[], arg1: AnnotationDescriptor[], arg2: TypeConstructor, arg3: DeclarationDescriptor): TypeAttribute<any>[];
    toString(): string;
    // private transformRuntimeFunctionTypeToSuspendFunction(arg0: KotlinType): SimpleType;
    type(arg0: ProtoBuf$Type): KotlinType;
    // private typeArgument(arg0: TypeParameterDescriptor, arg1: ProtoBuf$Type$Argument): TypeProjection;
    // private typeConstructor(arg0: ProtoBuf$Type): TypeConstructor;
}