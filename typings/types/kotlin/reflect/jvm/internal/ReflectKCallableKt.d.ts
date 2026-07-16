import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export class ReflectKCallableKt extends Object {
    static callAnnotationConstructor(paramarg0: ReflectKCallable<Object>, paramarg1: Map<KParameter, Object>): Object | null;
    static callDefaultMethod(paramarg0: ReflectKCallable<Object>, paramarg1: Map<KParameter, Object>, paramarg2: Continuation<Object>): Object | null;
    static computeAbsentArguments(paramarg0: ReflectKCallable<Object>): Object[];
    static getBoundReceiver(paramarg0: ReflectKCallable<Object>): Object;
    static isAnnotationConstructor(paramarg0: ReflectKCallable<Object>): boolean;
    static isBound(paramarg0: ReflectKCallable<Object>): boolean;
    static isConstructor(paramarg0: ReflectKCallable<Object>): boolean;
    static unbindAllReceivers(paramarg0: ReflectKCallable<Object>): ReflectKCallable<Object>;
}