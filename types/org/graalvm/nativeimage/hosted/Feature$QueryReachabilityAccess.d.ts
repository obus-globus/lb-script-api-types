import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Feature$FeatureAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$FeatureAccess.d.ts'
export interface Feature$QueryReachabilityAccess extends Object, Feature$FeatureAccess{
    isReachable(clazz: Class<Object>): boolean;
    isReachable(method: Executable): boolean;
    isReachable(field: Field): boolean;
    reachableMethodOverrides(baseMethod: Executable): Executable[];
    reachableSubtypes(baseClass: Class<Object>): Class<Object>[];
}