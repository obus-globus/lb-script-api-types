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
    static computeJvmSignature(paramarg0: KmProperty, paramarg1: KDeclarationContainerImpl): string;
    static convertTypeArgumentToJavaType(paramarg0: () => AbstractKType, paramarg1: number): () => Type;
    static createUnboundConstructor(paramarg0: KmConstructor, paramarg1: KDeclarationContainerImpl): KotlinKFunction;
    static createUnboundFunction(paramarg0: KmFunction, paramarg1: KDeclarationContainerImpl): KotlinKFunction;
    static createUnboundProperty(paramarg0: KmProperty, paramarg1: KDeclarationContainerImpl): KotlinKProperty<Object>;
    static loadKClass(paramarg0: ClassLoader, paramarg1: string, paramarg2: boolean): KClass<Object>;
    static toAnnotation(paramarg0: KmAnnotation, paramarg1: ClassLoader): Annotation;
    static toClassId(paramarg0: string): ClassId;
    static toKType(paramarg0: KmType, paramarg1: ClassLoader, paramarg2: TypeParameterTable, paramarg3: boolean, paramarg4: () => Type): AbstractKType;
    static toKVariance(paramarg0: KmVariance): KVariance;
    static toKVisibility(paramarg0: Visibility): KVisibility;
    static toNonLocalSimpleName(paramarg0: string): string;
}