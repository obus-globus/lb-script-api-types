import type { Attribute } from '../../../../javax/xml/stream/events/Attribute.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Namespace extends Attribute, Object{
    getNamespaceURI(): string;
    getPrefix(): string;
    isDefaultNamespaceDeclaration(): boolean;
}