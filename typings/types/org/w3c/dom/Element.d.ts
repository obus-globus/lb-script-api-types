import type { Object } from '../../../java/lang/Object.d.ts'
import type { Attr } from '../../../org/w3c/dom/Attr.d.ts'
import type { Document } from '../../../org/w3c/dom/Document.d.ts'
import type { NamedNodeMap } from '../../../org/w3c/dom/NamedNodeMap.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
import type { NodeList } from '../../../org/w3c/dom/NodeList.d.ts'
import type { TypeInfo } from '../../../org/w3c/dom/TypeInfo.d.ts'
import type { UserDataHandler } from '../../../org/w3c/dom/UserDataHandler.d.ts'
export interface Element extends Object, Node{
    appendChild(arg0: Node): Node;
    cloneNode(arg0: boolean): Node;
    compareDocumentPosition(arg0: Node): number;
    getAttribute(arg0: string): string;
    getAttributeNS(arg0: string, arg1: string): string;
    getAttributeNode(arg0: string): Attr;
    getAttributeNodeNS(arg0: string, arg1: string): Attr;
    getAttributes(): NamedNodeMap;
    getBaseURI(): string;
    getChildNodes(): NodeList;
    getElementsByTagName(arg0: string): NodeList;
    getElementsByTagNameNS(arg0: string, arg1: string): NodeList;
    getFeature(arg0: string, arg1: string): Object;
    getFirstChild(): Node;
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
    getSchemaTypeInfo(): TypeInfo;
    getTagName(): string;
    getTextContent(): string;
    getUserData(arg0: string): Object;
    hasAttribute(arg0: string): boolean;
    hasAttributeNS(arg0: string, arg1: string): boolean;
    hasAttributes(): boolean;
    hasChildNodes(): boolean;
    insertBefore(arg0: Node, arg1: Node): Node;
    isDefaultNamespace(arg0: string): boolean;
    isEqualNode(arg0: Node): boolean;
    isSameNode(arg0: Node): boolean;
    isSupported(arg0: string, arg1: string): boolean;
    lookupNamespaceURI(arg0: string): string;
    lookupPrefix(arg0: string): string;
    normalize(): void;
    removeAttribute(arg0: string): void;
    removeAttributeNS(arg0: string, arg1: string): void;
    removeAttributeNode(arg0: Attr): Attr;
    removeChild(arg0: Node): Node;
    replaceChild(arg0: Node, arg1: Node): Node;
    setAttribute(arg0: string, arg1: string): void;
    setAttributeNS(arg0: string, arg1: string, arg2: string): void;
    setAttributeNode(arg0: Attr): Attr;
    setAttributeNodeNS(arg0: Attr): Attr;
    setIdAttribute(arg0: string, arg1: boolean): void;
    setIdAttributeNS(arg0: string, arg1: string, arg2: boolean): void;
    setIdAttributeNode(arg0: Attr, arg1: boolean): void;
    setNodeValue(arg0: string): void;
    setPrefix(arg0: string): void;
    setTextContent(arg0: string): void;
    setUserData(arg0: string, arg1: Object, arg2: UserDataHandler): Object;
}