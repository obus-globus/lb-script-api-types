import type { Subscriber$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { EventBus } from '../../../../com/google/common/eventbus/EventBus.d.ts'
import type { Subscriber } from '../../../../com/google/common/eventbus/Subscriber.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Subscriber$SynchronizedSubscriber extends Subscriber {
    private constructor(bus: EventBus, target: Object, method: Method)
    constructor(arg0: EventBus, arg1: Object, arg2: Method, arg3: Subscriber$1)
    invokeSubscriberMethod(event: Object): void;
}