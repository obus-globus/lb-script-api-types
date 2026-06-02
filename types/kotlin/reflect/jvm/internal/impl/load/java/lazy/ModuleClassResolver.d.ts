import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
export interface ModuleClassResolver extends Object{
    resolveClass(arg0: JavaClass): ClassDescriptor;
}