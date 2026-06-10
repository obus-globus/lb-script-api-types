import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Feature$FeatureAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$FeatureAccess.d.ts'
export interface Feature$DuringSetupAccess extends Object, Feature$FeatureAccess {
    registerObjectReachabilityHandler<T extends Object | number | string | boolean>(callback: (param0: T) => void, clazz: Class<T>): void;
    registerObjectReplacer(replacer: (param0: Object) => Object): void;
}