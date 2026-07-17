import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../../../../kotlin/Lazy.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassKind } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ScopesHolderForClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ScopesHolderForClass.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueClassRepresentation } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { Visibility } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Visibility.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ClassDescriptorBase } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassDescriptorBase.d.ts'
import type { JavaResolverCache } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/components/JavaResolverCache.d.ts'
import type { JavaClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaClassDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { LazyJavaClassDescriptor$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaClassDescriptor$Companion.d.ts'
import type { LazyJavaClassDescriptor$LazyJavaClassTypeConstructor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaClassDescriptor$LazyJavaClassTypeConstructor.d.ts'
import type { LazyJavaClassMemberScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaClassMemberScope.d.ts'
import type { LazyJavaStaticClassScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaStaticClassScope.d.ts'
import type { JavaAnnotation } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaAnnotation.d.ts'
import type { JavaClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { InnerClassesScopeWrapper } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/InnerClassesScopeWrapper.d.ts'
import type { MemberScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { SimpleType } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class LazyJavaClassDescriptor extends ClassDescriptorBase implements JavaClassDescriptor {
    static Companion: LazyJavaClassDescriptor$Companion;
    constructor(arg0: LazyJavaResolverContext, arg1: DeclarationDescriptor, arg2: JavaClass, arg3: ClassDescriptor)
    // private additionalSupertypeClassDescriptor: ClassDescriptor;
    readonly annotations: AnnotationDescriptor[];
    // private c: LazyJavaResolverContext;
    // private declaredParameters: NotNullLazyValue<TypeParameterDescriptor[]>;
    // private innerClassesScope: InnerClassesScopeWrapper;
    // private isInner: boolean;
    // private jClass: JavaClass;
    readonly kind: ClassKind;
    readonly modality: Modality;
    // private moduleAnnotations$delegate: Lazy<Object>;
    // private outerContext: LazyJavaResolverContext;
    // private scopeHolder: ScopesHolderForClass<LazyJavaClassMemberScope>;
    readonly staticScope: LazyJavaStaticClassScope;
    readonly typeConstructor: LazyJavaClassDescriptor$LazyJavaClassTypeConstructor;
    readonly unsubstitutedMemberScope: LazyJavaClassMemberScope;
    readonly visibility: Visibility;
    copy$org_jetbrains_kotlin_descriptors_jvm(arg0: JavaResolverCache, arg1: ClassDescriptor): LazyJavaClassDescriptor;
    getAnnotations(): AnnotationDescriptor[];
    getCompanionObjectDescriptor(): ClassDescriptor;
    getConstructors(): ClassConstructorDescriptor[];
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getJClass(): JavaClass;
    getKind(): ClassKind;
    getModality(): Modality;
    getModuleAnnotations(): JavaAnnotation[];
    getStaticScope(): MemberScope;
    getTypeConstructor(): TypeConstructor;
    getUnsubstitutedInnerClassesScope(): MemberScope;
    getUnsubstitutedMemberScope(): LazyJavaClassMemberScope;
    getUnsubstitutedMemberScope(arg0: KotlinTypeRefiner): LazyJavaClassMemberScope;
    getUnsubstitutedPrimaryConstructor(): ClassConstructorDescriptor;
    getValueClassRepresentation(): ValueClassRepresentation<SimpleType>;
    getVisibility(): DescriptorVisibility;
    isActual(): boolean;
    isCompanionObject(): boolean;
    isData(): boolean;
    isExpect(): boolean;
    isFun(): boolean;
    isInline(): boolean;
    isInner(): boolean;
    isValue(): boolean;
    toString(): string;
}