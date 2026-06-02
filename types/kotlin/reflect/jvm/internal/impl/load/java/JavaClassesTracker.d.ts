import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JavaClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaClassDescriptor.d.ts'
export interface JavaClassesTracker extends Object{
    reportClass(arg0: JavaClassDescriptor): void;
}