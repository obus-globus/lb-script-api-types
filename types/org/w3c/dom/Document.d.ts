import type { Object } from '../../../java/lang/Object.d.ts'
import type { Attr } from '../../../org/w3c/dom/Attr.d.ts'
import type { CDATASection } from '../../../org/w3c/dom/CDATASection.d.ts'
import type { Comment } from '../../../org/w3c/dom/Comment.d.ts'
import type { DOMConfiguration } from '../../../org/w3c/dom/DOMConfiguration.d.ts'
import type { DOMImplementation } from '../../../org/w3c/dom/DOMImplementation.d.ts'
import type { DocumentFragment } from '../../../org/w3c/dom/DocumentFragment.d.ts'
import type { DocumentType } from '../../../org/w3c/dom/DocumentType.d.ts'
import type { Element } from '../../../org/w3c/dom/Element.d.ts'
import type { EntityReference } from '../../../org/w3c/dom/EntityReference.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
import type { NodeList } from '../../../org/w3c/dom/NodeList.d.ts'
import type { ProcessingInstruction } from '../../../org/w3c/dom/ProcessingInstruction.d.ts'
import type { Text } from '../../../org/w3c/dom/Text.d.ts'
export interface Document extends Object, Node{
    adoptNode(arg0: Node): Node;
    createAttribute(arg0: string): Attr;
    createAttributeNS(arg0: string, arg1: string): Attr;
    createCDATASection(arg0: string): CDATASection;
    createComment(arg0: string): Comment;
    createDocumentFragment(): DocumentFragment;
    createElement(arg0: string): Element;
    createElementNS(arg0: string, arg1: string): Element;
    createEntityReference(arg0: string): EntityReference;
    createProcessingInstruction(arg0: string, arg1: string): ProcessingInstruction;
    createTextNode(arg0: string): Text;
    getDoctype(): DocumentType;
    getDocumentElement(): Element;
    getDocumentURI(): string;
    getDomConfig(): DOMConfiguration;
    getElementById(arg0: string): Element;
    getElementsByTagName(arg0: string): NodeList;
    getElementsByTagNameNS(arg0: string, arg1: string): NodeList;
    getImplementation(): DOMImplementation;
    getInputEncoding(): string;
    getStrictErrorChecking(): boolean;
    getXmlEncoding(): string;
    getXmlStandalone(): boolean;
    getXmlVersion(): string;
    importNode(arg0: Node, arg1: boolean): Node;
    normalizeDocument(): void;
    renameNode(arg0: Node, arg1: string, arg2: string): Node;
    setDocumentURI(arg0: string): void;
    setStrictErrorChecking(arg0: boolean): void;
    setXmlStandalone(arg0: boolean): void;
    setXmlVersion(arg0: string): void;
}