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
import type { NamedNodeMap } from '../../../org/w3c/dom/NamedNodeMap.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
import type { NodeList } from '../../../org/w3c/dom/NodeList.d.ts'
import type { ProcessingInstruction } from '../../../org/w3c/dom/ProcessingInstruction.d.ts'
import type { Text } from '../../../org/w3c/dom/Text.d.ts'
import type { UserDataHandler } from '../../../org/w3c/dom/UserDataHandler.d.ts'
export interface Document extends Object, Node{
    adoptNode(arg0: Node): Node;
    appendChild(arg0: Node): Node;
    cloneNode(arg0: boolean): Node;
    compareDocumentPosition(arg0: Node): number;
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
    getAttributes(): NamedNodeMap;
    getBaseURI(): string;
    getChildNodes(): NodeList;
    getDoctype(): DocumentType;
    getDocumentElement(): Element;
    getDocumentURI(): string;
    getDomConfig(): DOMConfiguration;
    getElementById(arg0: string): Element;
    getElementsByTagName(arg0: string): NodeList;
    getElementsByTagNameNS(arg0: string, arg1: string): NodeList;
    getFeature(arg0: string, arg1: string): Object;
    getFirstChild(): Node;
    getImplementation(): DOMImplementation;
    getInputEncoding(): string;
    getLastChild(): Node;
    getLocalName(): string;
    getNamespaceURI(): string;
    getNextSibling(): Node;
    getNodeName(): string;
    getNodeType(): number;
    getNodeValue(): string;
    getOwnerDocument(): Document;
    getParentNode(): Node;
    getPrefix(): string;
    getPreviousSibling(): Node;
    getStrictErrorChecking(): boolean;
    getTextContent(): string;
    getUserData(arg0: string): Object;
    getXmlEncoding(): string;
    getXmlStandalone(): boolean;
    getXmlVersion(): string;
    hasAttributes(): boolean;
    hasChildNodes(): boolean;
    importNode(arg0: Node, arg1: boolean): Node;
    insertBefore(arg0: Node, arg1: Node): Node;
    isDefaultNamespace(arg0: string): boolean;
    isEqualNode(arg0: Node): boolean;
    isSameNode(arg0: Node): boolean;
    isSupported(arg0: string, arg1: string): boolean;
    lookupNamespaceURI(arg0: string): string;
    lookupPrefix(arg0: string): string;
    normalize(): void;
    normalizeDocument(): void;
    removeChild(arg0: Node): Node;
    renameNode(arg0: Node, arg1: string, arg2: string): Node;
    replaceChild(arg0: Node, arg1: Node): Node;
    setDocumentURI(arg0: string): void;
    setNodeValue(arg0: string): void;
    setPrefix(arg0: string): void;
    setStrictErrorChecking(arg0: boolean): void;
    setTextContent(arg0: string): void;
    setUserData(arg0: string, arg1: Object, arg2: UserDataHandler): Object;
    setXmlStandalone(arg0: boolean): void;
    setXmlVersion(arg0: string): void;
}