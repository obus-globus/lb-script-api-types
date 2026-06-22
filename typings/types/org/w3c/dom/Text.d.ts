import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharacterData } from '../../../org/w3c/dom/CharacterData.d.ts'
import type { Document } from '../../../org/w3c/dom/Document.d.ts'
import type { NamedNodeMap } from '../../../org/w3c/dom/NamedNodeMap.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
import type { NodeList } from '../../../org/w3c/dom/NodeList.d.ts'
import type { UserDataHandler } from '../../../org/w3c/dom/UserDataHandler.d.ts'
export interface Text extends Object, CharacterData{
    appendChild(arg0: Node): Node;
    appendData(arg0: string): void;
    cloneNode(arg0: boolean): Node;
    compareDocumentPosition(arg0: Node): number;
    deleteData(arg0: number, arg1: number): void;
    getAttributes(): NamedNodeMap;
    getBaseURI(): string;
    getChildNodes(): NodeList;
    getData(): string;
    getFeature(arg0: string, arg1: string): Object;
    getFirstChild(): Node;
    getLastChild(): Node;
    getLength(): number;
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
    getWholeText(): string;
    hasAttributes(): boolean;
    hasChildNodes(): boolean;
    insertBefore(arg0: Node, arg1: Node): Node;
    insertData(arg0: number, arg1: string): void;
    isDefaultNamespace(arg0: string): boolean;
    isElementContentWhitespace(): boolean;
    isEqualNode(arg0: Node): boolean;
    isSameNode(arg0: Node): boolean;
    isSupported(arg0: string, arg1: string): boolean;
    lookupNamespaceURI(arg0: string): string;
    lookupPrefix(arg0: string): string;
    normalize(): void;
    removeChild(arg0: Node): Node;
    replaceChild(arg0: Node, arg1: Node): Node;
    replaceData(arg0: number, arg1: number, arg2: string): void;
    replaceWholeText(arg0: string): Text;
    setData(arg0: string): void;
    setNodeValue(arg0: string): void;
    setPrefix(arg0: string): void;
    setTextContent(arg0: string): void;
    setUserData(arg0: string, arg1: Object, arg2: UserDataHandler): Object;
    splitText(arg0: number): Text;
    substringData(arg0: number, arg1: number): string;
}