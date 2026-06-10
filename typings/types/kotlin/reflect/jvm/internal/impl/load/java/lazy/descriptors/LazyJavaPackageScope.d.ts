import type { ClassDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { PropertyDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { DeclaredMemberIndex } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/DeclaredMemberIndex.d.ts'
import type { LazyJavaPackageFragment } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaPackageFragment.d.ts'
import type { LazyJavaPackageScope$FindClassRequest } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaPackageScope$FindClassRequest.d.ts'
import type { LazyJavaPackageScope$KotlinClassLookupResult } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaPackageScope$KotlinClassLookupResult.d.ts'
import type { LazyJavaStaticScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaStaticScope.d.ts'
import type { JavaClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaPackage } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaPackage.d.ts'
import type { KotlinJvmBinaryClass } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinJvmBinaryClass.d.ts'
import type { MetadataVersion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
import type { NullableLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
export class LazyJavaPackageScope extends LazyJavaStaticScope {
    static Companion: MemberScope$Companion;
    constructor(arg0: LazyJavaResolverContext, arg1: JavaPackage, arg2: LazyJavaPackageFragment)
    // private classes: MemoizedFunctionToNullable<LazyJavaPackageScope$FindClassRequest, ClassDescriptor>;
    // private jPackage: JavaPackage;
    // private knownClassNamesInPackage: NullableLazyValue<string[]>;
    readonly ownerDescriptor: LazyJavaPackageFragment;
    computeClassNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    computeFunctionNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    computeMemberIndex(): DeclaredMemberIndex;
    computeNonDeclaredFunctions(arg0: SimpleFunctionDescriptor[], arg1: Name): void;
    computePropertyNames(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): Name[];
    // private findClassifier(arg0: Name, arg1: JavaClass): ClassDescriptor;
    findClassifierByJavaClass$descriptors_jvm(arg0: JavaClass): ClassDescriptor;
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): DeclarationDescriptor[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): PropertyDescriptor[];
    // private getMetadataVersion(): MetadataVersion;
    getOwnerDescriptor(): LazyJavaPackageFragment;
    // private resolveKotlinBinaryClass(arg0: KotlinJvmBinaryClass): LazyJavaPackageScope$KotlinClassLookupResult;
}