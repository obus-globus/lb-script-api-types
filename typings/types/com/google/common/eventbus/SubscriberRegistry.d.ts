import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { EventBus } from '../../../../com/google/common/eventbus/EventBus.d.ts'
import type { Subscriber } from '../../../../com/google/common/eventbus/Subscriber.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class SubscriberRegistry extends Object {
    constructor(bus: EventBus)
    // private bus: EventBus;
    // private subscribers: JavaMap<Class<Object>, Subscriber[]>;
    // private findAllSubscribers(listener: Object): Multimap<Class<Object>, Subscriber>;
    getSubscribers(event: Object): Iterator<Subscriber>;
    getSubscribersForTesting(eventType: Class<Object>): Subscriber[];
    register(listener: Object): void;
    unregister(listener: Object): void;
}