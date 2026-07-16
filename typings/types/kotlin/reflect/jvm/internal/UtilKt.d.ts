import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { FunctionJvmDescriptor } from '../../../../kotlin/reflect/jvm/internal/FunctionJvmDescriptor.d.ts'
import type { FunctionJvmDescriptorLoaded } from '../../../../kotlin/reflect/jvm/internal/FunctionJvmDescriptorLoaded.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectKFunction } from '../../../../kotlin/reflect/jvm/internal/ReflectKFunction.d.ts'
import type { ReflectKProperty } from '../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
import type { CallableDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { Annotated } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/Annotated.d.ts'
import type { BinaryVersion } from '../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { NameResolver } from '../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { ClassId } from '../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { MessageLite } from '../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { MemberDeserializer } from '../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/MemberDeserializer.d.ts'
import type { DeserializedContainerSource } from '../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
export class UtilKt extends Object {
    static asReflectCallable(self: Object | null): ReflectKCallable<Object> | null;
    static asReflectFunction(self: Object | null): ReflectKFunction | null;
    static asReflectProperty(self: Object | null): ReflectKProperty<Object> | null;
    static computeAnnotations(self: Annotated): Annotation[];
    static createArrayType(self: Class<Object>): Class<Object>;
    static defaultPrimitiveValue(type: Type): Object | null;
    static deserializeToDescriptor<D extends CallableDescriptor, M extends MessageLite>(moduleAnchor: Class<Object>, containerSource: DeserializedContainerSource | null, proto: M, nameResolver: NameResolver, typeTable: TypeTable, metadataVersion: BinaryVersion, createDescriptor: (param0: MemberDeserializer, param1: M) => D): D;
    static getDeclaredFieldOrNull(self: Class<Object>, name: string): Field | null;
    static getDeclaredMethodOrNull(self: Class<Object>, name: string, ...parameterTypes: Class<Object>[]): Method | null;
    static getInstanceReceiverParameter(paramarg0: DescriptorKCallable<Object>): ReceiverParameterDescriptor;
    static getJVM_STATIC(): FqName;
    static getStdlibClassLoader(): ClassLoader;
    static getUnwrappedAnnotationClass(paramarg0: Annotation): KClass<Annotation>;
    static hasInherited(self: Annotation): boolean;
    static isAlwaysBoxedByCompiler(paramarg0: KParameter): boolean;
    static isInlineClassType(paramarg0: KType): boolean;
    static isNullableType(self: KType): boolean;
    static isPackagePrivate(paramarg0: number): boolean;
    static isRepeatableContainerForNonInheritedAnnotation(self: Annotation): boolean;
    static loadClass(self: ClassLoader, kotlinClassId: ClassId, arrayDimensions: number): Class<Object> | null;
    static parseAndLoadDescriptor(self: ClassLoader, desc: string, loadReturnType: boolean): FunctionJvmDescriptorLoaded;
    static parseJvmDescriptor(desc: string): FunctionJvmDescriptor;
    static toJavaClass(self: ClassDescriptor): Class<Object> | null;
    static toJvmDescriptor(self: KClass<Object>): string;
    static toKVisibility(self: DescriptorVisibility): KVisibility | null;
    static unsubstitutedUnderlyingType(self: KType): KType | null;
    static unwrapKotlinRepeatableAnnotations(self: Annotation[]): Annotation[];
}