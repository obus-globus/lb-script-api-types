import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { PropertyDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { SyntheticJavaPartsProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/jvm/SyntheticJavaPartsProvider.d.ts'
import type { SyntheticJavaPartsProvider$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/jvm/SyntheticJavaPartsProvider$Companion.d.ts'
export class CompositeSyntheticJavaPartsProvider extends Object implements SyntheticJavaPartsProvider {
    static Companion: SyntheticJavaPartsProvider$Companion;
    constructor(arg0: SyntheticJavaPartsProvider[])
    // private inner: SyntheticJavaPartsProvider[];
    generateConstructors(arg0: ClassDescriptor, arg1: ClassConstructorDescriptor[], arg2: LazyJavaResolverContext): void;
    generateMethods(arg0: ClassDescriptor, arg1: Name, arg2: E[], arg3: LazyJavaResolverContext): void;
    generateNestedClass(arg0: ClassDescriptor, arg1: Name, arg2: ClassDescriptor[], arg3: LazyJavaResolverContext): void;
    generateStaticFunctions(arg0: ClassDescriptor, arg1: Name, arg2: E[], arg3: LazyJavaResolverContext): void;
    getMethodNames(arg0: ClassDescriptor, arg1: LazyJavaResolverContext): Name[];
    getNestedClassNames(arg0: ClassDescriptor, arg1: LazyJavaResolverContext): Name[];
    getStaticFunctionNames(arg0: ClassDescriptor, arg1: LazyJavaResolverContext): Name[];
    modifyField(arg0: ClassDescriptor, arg1: PropertyDescriptorImpl, arg2: LazyJavaResolverContext): PropertyDescriptorImpl;
}