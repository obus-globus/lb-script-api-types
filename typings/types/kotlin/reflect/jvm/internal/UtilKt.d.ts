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
import type { DeserializedContainerSource } from '../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
export class UtilKt extends Object {
    static asReflectCallable(paramarg0: Object): ReflectKCallable<Object>;
    static asReflectFunction(paramarg0: Object): ReflectKFunction;
    static asReflectProperty(paramarg0: Object): ReflectKProperty<Object>;
    static computeAnnotations(paramarg0: Annotated): Annotation[];
    static createArrayType(paramarg0: Class<Object>): Class<Object>;
    static defaultPrimitiveValue(paramarg0: Type): Object;
    static deserializeToDescriptor(paramarg0: Class<Object>, paramarg1: DeserializedContainerSource, paramarg2: MessageLite | null, paramarg3: NameResolver, paramarg4: TypeTable, paramarg5: BinaryVersion, paramarg6: (param0: Object, param1: Object) => CallableDescriptor | null): CallableDescriptor | null;
    static getDeclaredFieldOrNull(paramarg0: Class<Object>, paramarg1: string): Field;
    static getDeclaredMethodOrNull(paramarg0: Class<Object>, paramarg1: string, ...paramarg2: Class<Object>[]): Method;
    static getInstanceReceiverParameter(paramarg0: DescriptorKCallable<Object>): ReceiverParameterDescriptor;
    static getJVM_STATIC(): FqName;
    static getStdlibClassLoader(): ClassLoader;
    static getUnwrappedAnnotationClass(paramarg0: Annotation): KClass<Annotation>;
    static hasInherited(paramarg0: Annotation): boolean;
    static isAlwaysBoxedByCompiler(paramarg0: KParameter): boolean;
    static isInlineClassType(paramarg0: KType): boolean;
    static isNullableType(paramarg0: KType): boolean;
    static isPackagePrivate(paramarg0: number): boolean;
    static isRepeatableContainerForNonInheritedAnnotation(paramarg0: Annotation): boolean;
    static loadClass(paramarg0: ClassLoader, paramarg1: ClassId, paramarg2: number): Class<Object>;
    static parseAndLoadDescriptor(paramarg0: ClassLoader, paramarg1: string, paramarg2: boolean): FunctionJvmDescriptorLoaded;
    static parseJvmDescriptor(paramarg0: string): FunctionJvmDescriptor;
    static toJavaClass(paramarg0: ClassDescriptor): Class<Object>;
    static toJvmDescriptor(paramarg0: KClass<Object>): string;
    static toKVisibility(paramarg0: DescriptorVisibility): KVisibility;
    static unsubstitutedUnderlyingType(paramarg0: KType): KType;
    static unwrapKotlinRepeatableAnnotations(paramarg0: Annotation[]): Annotation[];
}