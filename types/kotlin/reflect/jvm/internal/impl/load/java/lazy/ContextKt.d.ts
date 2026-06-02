import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassOrPackageFragmentDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassOrPackageFragmentDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { JavaTypeQualifiersByElementType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaTypeQualifiersByElementType.d.ts'
import type { JavaResolverComponents } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/JavaResolverComponents.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { TypeParameterResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/TypeParameterResolver.d.ts'
import type { JavaTypeParameterListOwner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaTypeParameterListOwner.d.ts'
export class ContextKt extends Object {
    static child(paramarg0: LazyJavaResolverContext, paramarg1: TypeParameterResolver): LazyJavaResolverContext;
    static childForClassOrPackage(paramarg0: LazyJavaResolverContext, paramarg1: ClassOrPackageFragmentDescriptor, paramarg2: JavaTypeParameterListOwner, paramarg3: number): LazyJavaResolverContext;
    static childForMethod(paramarg0: LazyJavaResolverContext, paramarg1: DeclarationDescriptor, paramarg2: JavaTypeParameterListOwner, paramarg3: number): LazyJavaResolverContext;
    static computeNewDefaultTypeQualifiers(paramarg0: LazyJavaResolverContext, paramarg1: AnnotationDescriptor[]): JavaTypeQualifiersByElementType;
    static copyWithNewDefaultTypeQualifiers(paramarg0: LazyJavaResolverContext, paramarg1: AnnotationDescriptor[]): LazyJavaResolverContext;
    static replaceComponents(paramarg0: LazyJavaResolverContext, paramarg1: JavaResolverComponents): LazyJavaResolverContext;
}