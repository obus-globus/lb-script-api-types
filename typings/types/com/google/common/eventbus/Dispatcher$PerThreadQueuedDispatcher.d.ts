import type { Dispatcher } from '../../../../com/google/common/eventbus/Dispatcher.d.ts'
import type { Dispatcher$PerThreadQueuedDispatcher$Event } from '../../../../com/google/common/eventbus/Dispatcher$PerThreadQueuedDispatcher$Event.d.ts'
import type { Subscriber } from '../../../../com/google/common/eventbus/Subscriber.d.ts'
import type { ThreadLocal } from '../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Dispatcher$PerThreadQueuedDispatcher extends Dispatcher {
    constructor(arg0: any)
    // private dispatching: ThreadLocal<boolean>;
    // private queue: ThreadLocal<Dispatcher$PerThreadQueuedDispatcher$Event[]>;
    dispatch(event: Object, subscribers: Iterator<Subscriber>): void;
}