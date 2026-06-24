import type { Dispatcher$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Dispatcher } from '../../../../com/google/common/eventbus/Dispatcher.d.ts'
import type { Dispatcher$LegacyAsyncDispatcher$EventWithSubscriber } from '../../../../com/google/common/eventbus/Dispatcher$LegacyAsyncDispatcher$EventWithSubscriber.d.ts'
import type { Subscriber } from '../../../../com/google/common/eventbus/Subscriber.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Dispatcher$LegacyAsyncDispatcher extends Dispatcher {
    private constructor()
    constructor(arg0: Dispatcher$1)
    // private queue: Dispatcher$LegacyAsyncDispatcher$EventWithSubscriber[];
    dispatch(event: Object, subscribers: Iterator<Subscriber>): void;
}