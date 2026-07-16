import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
export class ReflectKCallableKt extends Object {
    static callAnnotationConstructor<R extends unknown>(self: ReflectKCallable<R>, args: Map<KParameter, Object | null>): R;
    static callDefaultMethod<R extends unknown>(self: ReflectKCallable<R>, args: Map<KParameter, Object | null>, continuationArgument: Continuation<Object> | null): R;
    static computeAbsentArguments(self: ReflectKCallable<Object>): (Object | null)[];
    static getBoundReceiver(paramarg0: ReflectKCallable<Object>): Object;
    static isAnnotationConstructor(paramarg0: ReflectKCallable<Object>): boolean;
    static isBound(paramarg0: ReflectKCallable<Object>): boolean;
    static isConstructor(paramarg0: ReflectKCallable<Object>): boolean;
    static unbindAllReceivers<R extends unknown>(self: ReflectKCallable<R>): ReflectKCallable<R>;
}