import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { NamespaceContext } from '../../../../javax/xml/namespace/NamespaceContext.d.ts'
import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Location } from '../../../../javax/xml/stream/Location.d.ts'
import type { Attribute } from '../../../../javax/xml/stream/events/Attribute.d.ts'
import type { Characters } from '../../../../javax/xml/stream/events/Characters.d.ts'
import type { EndElement } from '../../../../javax/xml/stream/events/EndElement.d.ts'
import type { Namespace } from '../../../../javax/xml/stream/events/Namespace.d.ts'
import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface StartElement extends XMLEvent, Object{
    asCharacters(): Characters;
    asEndElement(): EndElement;
    asStartElement(): StartElement;
    getAttributeByName(arg0: QName): Attribute;
    getAttributes(): Iterator<Attribute>;
    getEventType(): number;
    getLocation(): Location;
    getName(): QName;
    getNamespaceContext(): NamespaceContext;
    getNamespaceURI(arg0: string): string;
    getNamespaces(): Iterator<Namespace>;
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