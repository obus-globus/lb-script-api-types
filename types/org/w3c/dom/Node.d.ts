import type { Object } from '../../../java/lang/Object.d.ts'
import type { Document } from '../../../org/w3c/dom/Document.d.ts'
import type { NamedNodeMap } from '../../../org/w3c/dom/NamedNodeMap.d.ts'
import type { NodeList } from '../../../org/w3c/dom/NodeList.d.ts'
import type { UserDataHandler } from '../../../org/w3c/dom/UserDataHandler.d.ts'
export interface Node extends Object{
    appendChild(arg0: Node): Node;
    cloneNode(arg0: boolean): Node;
    compareDocumentPosition(arg0: Node): number;
    getAttributes(): NamedNodeMap;
    getBaseURI(): string;
    getChildNodes(): NodeList;
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
    getTextContent(): string;
    getUserData(arg0: string): Object;
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
    removeChild(arg0: Node): Node;
    replaceChild(arg0: Node, arg1: Node): Node;
    setNodeValue(arg0: string): void;
    setPrefix(arg0: string): void;
    setTextContent(arg0: string): void;
    setUserData(arg0: string, arg1: Object, arg2: UserDataHandler): Object;
}