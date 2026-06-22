import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Feature$QueryReachabilityAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$QueryReachabilityAccess.d.ts'
export interface Feature$AfterAnalysisAccess extends Object, Feature$QueryReachabilityAccess{
    getApplicationClassLoader(): ClassLoader;
    isReachable(method: Executable): boolean;
    isReachable(field: Field): boolean;
}