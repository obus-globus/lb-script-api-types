import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
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
export class UtilKt extends Object {
    static asReflectCallable(paramarg0: Object): ReflectKCallable<Object>;
    static asReflectFunction(paramarg0: Object): ReflectKFunction;
    static asReflectProperty(paramarg0: Object): ReflectKProperty<Object>;
    static computeAnnotations(paramarg0: Annotated): Annotation[];
    static createArrayType(paramarg0: Class<Object>): Class<Object>;
    static defaultPrimitiveValue(paramarg0: Type): Object;
    static deserializeToDescriptor(paramarg0: Class<Object>, paramarg1: Object | null, paramarg2: NameResolver, paramarg3: TypeTable, paramarg4: BinaryVersion, paramarg5: (param0: Object | null, param1: Object | null) => Object | null): Object | null;
    static getDeclaredFieldOrNull(paramarg0: Class<Object>, paramarg1: string): Field;
    static getDeclaredMethodOrNull(paramarg0: Class<Object>, paramarg1: string, paramarg2: Object | null): Method;
    static getInstanceReceiverParameter(paramarg0: CallableDescriptor): ReceiverParameterDescriptor;
    static getJVM_STATIC(): FqName;
    static getNeedsMultiFieldValueClassFlattening(paramarg0: KType): boolean;
    static isInlineClassType(paramarg0: KType): boolean;
    static loadClass(paramarg0: ClassLoader, paramarg1: ClassId, paramarg2: number): Class<Object>;
    static toJavaClass(paramarg0: ClassDescriptor): Class<Object>;
    static toKVisibility(paramarg0: DescriptorVisibility): KVisibility;
    static unwrapRepeatableAnnotations(paramarg0: (Object | null)[]): Annotation[];
}