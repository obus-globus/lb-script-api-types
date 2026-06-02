import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleClassResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/ModuleClassResolver.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { JavaDescriptorResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/jvm/JavaDescriptorResolver.d.ts'
export class SingleModuleClassResolver extends Object implements ModuleClassResolver {
    constructor()
    resolver: JavaDescriptorResolver;
    getResolver(): JavaDescriptorResolver;
    resolveClass(arg0: JavaClass): ClassDescriptor;
    setResolver(arg0: JavaDescriptorResolver): void;
}