import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface XMLEventConsumer extends Object{
    add(arg0: XMLEvent): void;
}