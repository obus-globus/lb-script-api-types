import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { PossiblyExternalAnnotationDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/PossiblyExternalAnnotationDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { JavaSourceElement } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/sources/JavaSourceElement.d.ts'
import type { JavaAnnotation } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaAnnotationArgument } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotationArgument.d.ts'
import type { JavaType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaType.d.ts'
import type { ClassId } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { NullableLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
import type { SimpleType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class LazyJavaAnnotationDescriptor extends Object implements PossiblyExternalAnnotationDescriptor {
    constructor(arg0: LazyJavaResolverContext, arg1: JavaAnnotation, arg2: boolean)
    // private allValueArguments$delegate: NotNullLazyValue<Object>;
    // private c: LazyJavaResolverContext;
    // private fqName$delegate: NullableLazyValue<Object>;
    // private isFreshlySupportedTypeUseAnnotation: boolean;
    // private isIdeExternalAnnotation: boolean;
    // private javaAnnotation: JavaAnnotation;
    readonly source: JavaSourceElement;
    // private type$delegate: NotNullLazyValue<Object>;
    // private createTypeForMissingDependencies(arg0: FqName): ClassDescriptor;
    getAllValueArguments(): Map<Name, ConstantValue<Object>>;
    getFqName(): FqName;
    getSource(): JavaSourceElement;
    getType(): SimpleType;
    isFreshlySupportedTypeUseAnnotation(): boolean;
    isIdeExternalAnnotation(): boolean;
    // private resolveAnnotationArgument(arg0: JavaAnnotationArgument): ConstantValue<Object>;
    // private resolveFromAnnotation(arg0: JavaAnnotation): ConstantValue<Object>;
    // private resolveFromArray(arg0: Name, arg1: JavaAnnotationArgument[]): ConstantValue<Object>;
    // private resolveFromEnumValue(arg0: ClassId, arg1: Name): ConstantValue<Object>;
    // private resolveFromJavaClassObjectType(arg0: JavaType): ConstantValue<Object>;
    toString(): string;
}