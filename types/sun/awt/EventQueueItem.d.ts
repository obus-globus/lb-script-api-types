import type { AWTEvent } from '../../java/awt/AWTEvent.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class EventQueueItem extends Object {
    constructor(arg0: AWTEvent)
    event: AWTEvent;
    next: EventQueueItem;
}