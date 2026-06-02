import type { XMLEvent } from '../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface EventFilter extends Object{
    accept(arg0: XMLEvent): boolean;
}