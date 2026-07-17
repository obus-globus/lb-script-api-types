import type { EventBus } from '../../../../com/google/common/eventbus/EventBus.d.ts'
import type { SubscriberExceptionContext } from '../../../../com/google/common/eventbus/SubscriberExceptionContext.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Subscriber extends Object {
    private constructor(bus: EventBus, target: Object, method: Method)
    // private bus: EventBus;
    // private executor: Executor;
    // private method: Method;
    // private target: Object;
    // private context(event: Object): SubscriberExceptionContext;
    dispatchEvent(event: Object): void;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    invokeSubscriberMethod(event: Object): void;
}