import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KVariance } from '../../../../kotlin/reflect/KVariance.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKFunction } from '../../../../kotlin/reflect/jvm/internal/KotlinKFunction.d.ts'
import type { KotlinKProperty } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { KmAnnotation } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmConstructor } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmConstructor.d.ts'
import type { KmFunction } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmType } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmType.d.ts'
import type { KmVariance } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmVariance.d.ts'
import type { Visibility } from '../../../../kotlin/reflect/jvm/internal/impl/km/Visibility.d.ts'
import type { ClassId } from '../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { AbstractKType } from '../../../../kotlin/reflect/jvm/internal/types/AbstractKType.d.ts'
export class ConvertFromMetadataKt extends Object {
    static computeJvmSignature(self: KmProperty, container: KDeclarationContainerImpl): string | null;
    static convertTypeArgumentToJavaType(computeType: () => AbstractKType, index: number): () => Type;
    static createUnboundConstructor(constructor: KmConstructor, container: KDeclarationContainerImpl): KotlinKFunction;
    static createUnboundFunction(function_: KmFunction, container: KDeclarationContainerImpl): KotlinKFunction;
    static createUnboundProperty(property: KmProperty, container: KDeclarationContainerImpl): KotlinKProperty<Object>;
    static loadKClass(self: ClassLoader, name: string, forceWrapperClass: boolean): KClass<Object> | null;
    static toAnnotation(self: KmAnnotation, classLoader: ClassLoader): Annotation;
    static toClassId(self: string): ClassId;
    static toKType(self: KmType, classLoader: ClassLoader, typeParameterTable: TypeParameterTable, forceWrapperClass: boolean, computeJavaType: (() => Type) | null): AbstractKType;
    static toKVariance(self: KmVariance): KVariance;
    static toKVisibility(self: Visibility): KVisibility | null;
    static toNonLocalSimpleName(self: string): string;
}