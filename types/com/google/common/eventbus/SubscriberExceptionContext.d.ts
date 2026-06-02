import type { EventBus } from '../../../../com/google/common/eventbus/EventBus.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SubscriberExceptionContext extends Object {
    constructor(eventBus: EventBus, event: Object, subscriber: Object, subscriberMethod: Method)
    readonly event: Object;
    readonly eventBus: EventBus;
    readonly subscriber: Object;
    readonly subscriberMethod: Method;
    getEvent(): Object;
    getEventBus(): EventBus;
    getSubscriber(): Object;
    getSubscriberMethod(): Method;
}