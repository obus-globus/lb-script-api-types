import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { JavaClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaClassDescriptor.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { ClassDeclaredMemberIndex } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/ClassDeclaredMemberIndex.d.ts'
import type { LazyJavaStaticScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaStaticScope.d.ts'
import type { JavaClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
export class LazyJavaStaticClassScope extends LazyJavaStaticScope {
    static Companion: MemberScope$Companion;
    constructor(arg0: LazyJavaResolverContext, arg1: JavaClass, arg2: JavaClassDescriptor)
    // private jClass: JavaClass;
    readonly ownerDescriptor: JavaClassDescriptor;
    computeClassNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    computeFunctionNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    computeImplicitlyDeclaredFunctions(arg0: SimpleFunctionDescriptor[], arg1: Name): void;
    computeMemberIndex(): ClassDeclaredMemberIndex;
    computeNonDeclaredFunctions(arg0: SimpleFunctionDescriptor[], arg1: Name): void;
    computeNonDeclaredProperties(arg0: Name, arg1: PropertyDescriptor[]): void;
    computePropertyNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    // private flatMapJavaStaticSupertypesScopes<R extends Object | number | string | boolean>(arg0: ClassDescriptor, arg1: R[], arg2: (param0: MemberScope) => R[]): R[];
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getOwnerDescriptor(): JavaClassDescriptor;
    // private getRealOriginal(arg0: PropertyDescriptor): PropertyDescriptor;
    // private getStaticFunctionsFromJavaSuperClasses(arg0: Name, arg1: ClassDescriptor): SimpleFunctionDescriptor[];
}