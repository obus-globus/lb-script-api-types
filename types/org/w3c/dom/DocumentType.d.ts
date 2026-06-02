import type { Object } from '../../../java/lang/Object.d.ts'
import type { NamedNodeMap } from '../../../org/w3c/dom/NamedNodeMap.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
export interface DocumentType extends Object, Node{
    getEntities(): NamedNodeMap;
    getInternalSubset(): string;
    getName(): string;
    getNotations(): NamedNodeMap;
    getPublicId(): string;
    getSystemId(): string;
}