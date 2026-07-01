import type { EventBus } from '../../../../com/google/common/eventbus/EventBus.d.ts'
import type { Subscriber } from '../../../../com/google/common/eventbus/Subscriber.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Subscriber$SynchronizedSubscriber extends Subscriber {
    constructor(arg0: EventBus, arg1: Object, arg2: Method, arg3: any)
    invokeSubscriberMethod(event: Object): void;
}