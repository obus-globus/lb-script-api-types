import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JavaClassesTracker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/JavaClassesTracker.d.ts'
import type { JavaClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaClassDescriptor.d.ts'
export class JavaClassesTracker$Default extends Object implements JavaClassesTracker {
    static INSTANCE: JavaClassesTracker$Default;
    private constructor()
    reportClass(arg0: JavaClassDescriptor): void;
}