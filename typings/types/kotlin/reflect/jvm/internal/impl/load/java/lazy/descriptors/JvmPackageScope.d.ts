import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { LazyJavaPackageFragment } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaPackageFragment.d.ts'
import type { LazyJavaPackageScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaPackageScope.d.ts'
import type { JavaPackage } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaPackage.d.ts'
import type { Name } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DescriptorKindFilter } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/DescriptorKindFilter.d.ts'
import type { MemberScope } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScope$Companion } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
export class JvmPackageScope extends Object implements MemberScope {
    static Companion: MemberScope$Companion;
    constructor(arg0: LazyJavaResolverContext, arg1: JavaPackage, arg2: LazyJavaPackageFragment)
    // private c: LazyJavaResolverContext;
    // private javaScope: LazyJavaPackageScope;
    // private kotlinScopes$delegate: NotNullLazyValue<Object>;
    // private packageFragment: LazyJavaPackageFragment;
    getClassifierNames(): Name[];
    getContributedClassifier(arg0: Name, arg1: LookupLocation): ClassifierDescriptor;
    getContributedDescriptors(arg0: DescriptorKindFilter, arg1: (param0: Name) => boolean): E[];
    getContributedFunctions(arg0: Name, arg1: LookupLocation): E[];
    getContributedVariables(arg0: Name, arg1: LookupLocation): E[];
    getFunctionNames(): Name[];
    getJavaScope$descriptors_jvm(): LazyJavaPackageScope;
    // private getKotlinScopes(): MemberScope[];
    getVariableNames(): Name[];
    recordLookup(arg0: Name, arg1: LookupLocation): void;
    toString(): string;
}