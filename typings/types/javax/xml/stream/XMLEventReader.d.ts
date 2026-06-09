import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { XMLEvent } from '../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export interface XMLEventReader extends Object, Iterator<Object> {
    close(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    getElementText(): string;
    getProperty(arg0: string): Object;
    hasNext(): boolean;
    nextEvent(): XMLEvent;
    nextTag(): XMLEvent;
    peek(): XMLEvent;
}