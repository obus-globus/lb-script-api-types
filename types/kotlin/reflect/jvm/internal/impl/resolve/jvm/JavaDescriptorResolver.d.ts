import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { JavaResolverCache } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/components/JavaResolverCache.d.ts'
import type { LazyJavaPackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaPackageFragmentProvider.d.ts'
import type { JavaClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
export class JavaDescriptorResolver extends Object {
    constructor(arg0: LazyJavaPackageFragmentProvider, arg1: JavaResolverCache)
    // private javaResolverCache: JavaResolverCache;
    readonly packageFragmentProvider: LazyJavaPackageFragmentProvider;
    getPackageFragmentProvider(): LazyJavaPackageFragmentProvider;
    resolveClass(arg0: JavaClass): ClassDescriptor;
}