import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Location } from '../../../../javax/xml/stream/Location.d.ts'
import type { Characters } from '../../../../javax/xml/stream/events/Characters.d.ts'
import type { EndElement } from '../../../../javax/xml/stream/events/EndElement.d.ts'
import type { StartElement } from '../../../../javax/xml/stream/events/StartElement.d.ts'
import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Attribute extends XMLEvent, Object{
    asCharacters(): Characters;
    asEndElement(): EndElement;
    asStartElement(): StartElement;
    getDTDType(): string;
    getEventType(): number;
    getLocation(): Location;
    getName(): QName;
    getSchemaType(): QName;
    getValue(): string;
    isAttribute(): boolean;
    isCharacters(): boolean;
    isEndDocument(): boolean;
    isEndElement(): boolean;
    isEntityReference(): boolean;
    isNamespace(): boolean;
    isProcessingInstruction(): boolean;
    isSpecified(): boolean;
    isStartDocument(): boolean;
    isStartElement(): boolean;
    writeAsEncodedUnicode(arg0: Writer): void;
}