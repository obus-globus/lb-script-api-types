import type { XMLStreamReader } from '../../../../javax/xml/stream/XMLStreamReader.d.ts'
import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { XMLEventConsumer } from '../../../../javax/xml/stream/util/XMLEventConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface XMLEventAllocator extends Object{
    allocate(arg0: XMLStreamReader): XMLEvent;
    allocate(arg0: XMLStreamReader, arg1: XMLEventConsumer): void;
    newInstance(): XMLEventAllocator;
}