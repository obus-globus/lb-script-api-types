import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { EventListener } from '../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
export class EventHook<T extends Event> extends Object {
    constructor(handlerClass: EventListener, priority: number, handler: (param0: T) => void)
    readonly handler: (param0: T) => void;
    readonly handlerClass: EventListener;
    readonly priority: number;
}