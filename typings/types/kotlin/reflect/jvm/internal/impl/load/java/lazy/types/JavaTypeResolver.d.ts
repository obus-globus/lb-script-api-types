import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { TypeParameterResolver } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/TypeParameterResolver.d.ts'
import type { JavaTypeAttributes } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/types/JavaTypeAttributes.d.ts'
import type { RawProjectionComputer } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/types/RawProjectionComputer.d.ts'
import type { JavaArrayType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaArrayType.d.ts'
import type { JavaClassifierType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClassifierType.d.ts'
import type { JavaType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { FqName } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { KotlinType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeParameterUpperBoundEraser } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeParameterUpperBoundEraser.d.ts'
import type { TypeProjection } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { Variance } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export class JavaTypeResolver extends Object {
    constructor(arg0: LazyJavaResolverContext, arg1: TypeParameterResolver)
    // private c: LazyJavaResolverContext;
    // private projectionComputer: RawProjectionComputer;
    // private typeParameterResolver: TypeParameterResolver;
    // private typeParameterUpperBoundEraser: TypeParameterUpperBoundEraser;
    // private argumentsMakeSenseOnlyForMutableContainer(arg0: JavaClassifierType, arg1: ClassDescriptor): boolean;
    // private computeArguments(arg0: JavaClassifierType, arg1: JavaTypeAttributes, arg2: TypeConstructor): TypeProjection[];
    // private computeRawTypeArguments(arg0: JavaClassifierType, arg1: TypeParameterDescriptor[], arg2: TypeConstructor, arg3: JavaTypeAttributes): TypeProjection[];
    // private computeSimpleJavaClassifierType(arg0: JavaClassifierType, arg1: JavaTypeAttributes, arg2: SimpleType): SimpleType;
    // private computeTypeConstructor(arg0: JavaClassifierType, arg1: JavaTypeAttributes): TypeConstructor;
    // private createNotFoundClass(arg0: JavaClassifierType): TypeConstructor;
    // private isConflictingArgumentFor(arg0: Variance, arg1: TypeParameterDescriptor): boolean;
    // private isNullable(arg0: JavaTypeAttributes): boolean;
    // private mapKotlinClass(arg0: JavaClassifierType, arg1: JavaTypeAttributes, arg2: FqName): ClassDescriptor;
    transformArrayType(arg0: JavaArrayType, arg1: JavaTypeAttributes, arg2: boolean): KotlinType;
    // private transformJavaClassifierType(arg0: JavaClassifierType, arg1: JavaTypeAttributes): KotlinType;
    transformJavaType(arg0: JavaType, arg1: JavaTypeAttributes): KotlinType;
    // private transformToTypeProjection(arg0: JavaType, arg1: JavaTypeAttributes, arg2: TypeParameterDescriptor): TypeProjection;
}