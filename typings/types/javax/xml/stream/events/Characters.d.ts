import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Location } from '../../../../javax/xml/stream/Location.d.ts'
import type { EndElement } from '../../../../javax/xml/stream/events/EndElement.d.ts'
import type { StartElement } from '../../../../javax/xml/stream/events/StartElement.d.ts'
import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Characters extends XMLEvent, Object{
    asCharacters(): Characters;
    asEndElement(): EndElement;
    asStartElement(): StartElement;
    getData(): string;
    getEventType(): number;
    getLocation(): Location;
    getSchemaType(): QName;
    isAttribute(): boolean;
    isCData(): boolean;
    isCharacters(): boolean;
    isEndDocument(): boolean;
    isEndElement(): boolean;
    isEntityReference(): boolean;
    isIgnorableWhiteSpace(): boolean;
    isNamespace(): boolean;
    isProcessingInstruction(): boolean;
    isStartDocument(): boolean;
    isStartElement(): boolean;
    isWhiteSpace(): boolean;
    writeAsEncodedUnicode(arg0: Writer): void;
}