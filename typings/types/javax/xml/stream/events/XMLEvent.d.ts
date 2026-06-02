import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Location } from '../../../../javax/xml/stream/Location.d.ts'
import type { XMLStreamConstants } from '../../../../javax/xml/stream/XMLStreamConstants.d.ts'
import type { Characters } from '../../../../javax/xml/stream/events/Characters.d.ts'
import type { EndElement } from '../../../../javax/xml/stream/events/EndElement.d.ts'
import type { StartElement } from '../../../../javax/xml/stream/events/StartElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface XMLEvent extends XMLStreamConstants, Object{
    asCharacters(): Characters;
    asEndElement(): EndElement;
    asStartElement(): StartElement;
    getEventType(): number;
    getLocation(): Location;
    getSchemaType(): QName;
    isAttribute(): boolean;
    isCharacters(): boolean;
    isEndDocument(): boolean;
    isEndElement(): boolean;
    isEntityReference(): boolean;
    isNamespace(): boolean;
    isProcessingInstruction(): boolean;
    isStartDocument(): boolean;
    isStartElement(): boolean;
    writeAsEncodedUnicode(arg0: Writer): void;
}