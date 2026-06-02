import type { NamespaceContext } from '../../../javax/xml/namespace/NamespaceContext.d.ts'
import type { QName } from '../../../javax/xml/namespace/QName.d.ts'
import type { Location } from '../../../javax/xml/stream/Location.d.ts'
import type { XMLStreamConstants } from '../../../javax/xml/stream/XMLStreamConstants.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface XMLStreamReader extends XMLStreamConstants, Object{
    close(): void;
    getAttributeCount(): number;
    getAttributeLocalName(arg0: number): string;
    getAttributeName(arg0: number): QName;
    getAttributeNamespace(arg0: number): string;
    getAttributePrefix(arg0: number): string;
    getAttributeType(arg0: number): string;
    getAttributeValue(arg0: number): string;
    getAttributeValue(arg0: string, arg1: string): string;
    getCharacterEncodingScheme(): string;
    getElementText(): string;
    getEncoding(): string;
    getEventType(): number;
    getLocalName(): string;
    getLocation(): Location;
    getName(): QName;
    getNamespaceContext(): NamespaceContext;
    getNamespaceCount(): number;
    getNamespacePrefix(arg0: number): string;
    getNamespaceURI(): string;
    getNamespaceURI(arg0: number): string;
    getNamespaceURI(arg0: string): string;
    getPIData(): string;
    getPITarget(): string;
    getPrefix(): string;
    getProperty(arg0: string): Object;
    getText(): string;
    getTextCharacters(): string[];
    getTextCharacters(arg0: number, arg1: string[], arg2: number, arg3: number): number;
    getTextLength(): number;
    getTextStart(): number;
    getVersion(): string;
    hasName(): boolean;
    hasNext(): boolean;
    hasText(): boolean;
    isAttributeSpecified(arg0: number): boolean;
    isCharacters(): boolean;
    isEndElement(): boolean;
    isStandalone(): boolean;
    isStartElement(): boolean;
    isWhiteSpace(): boolean;
    next(): number;
    nextTag(): number;
    require(arg0: number, arg1: string, arg2: string): void;
    standaloneSet(): boolean;
}