import type { NamespaceContext } from '../../../../javax/xml/namespace/NamespaceContext.d.ts'
import type { QName } from '../../../../javax/xml/namespace/QName.d.ts'
import type { Attribute } from '../../../../javax/xml/stream/events/Attribute.d.ts'
import type { Namespace } from '../../../../javax/xml/stream/events/Namespace.d.ts'
import type { XMLEvent } from '../../../../javax/xml/stream/events/XMLEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface StartElement extends XMLEvent, Object{
    getAttributeByName(arg0: QName): Attribute;
    getAttributes(): Iterator<Attribute>;
    getName(): QName;
    getNamespaceContext(): NamespaceContext;
    getNamespaceURI(arg0: string): string;
    getNamespaces(): Iterator<Namespace>;
}