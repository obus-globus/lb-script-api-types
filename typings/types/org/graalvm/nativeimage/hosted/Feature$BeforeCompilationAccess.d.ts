import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Feature$CompilationAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$CompilationAccess.d.ts'
export interface Feature$BeforeCompilationAccess extends Object, Feature$CompilationAccess{
    getApplicationClassLoader(): ClassLoader;
    objectFieldOffset(field: Field): number;
    registerAsImmutable(object: Object): void;
}