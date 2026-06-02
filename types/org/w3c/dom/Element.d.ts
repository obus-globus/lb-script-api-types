import type { Object } from '../../../java/lang/Object.d.ts'
import type { Attr } from '../../../org/w3c/dom/Attr.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
import type { NodeList } from '../../../org/w3c/dom/NodeList.d.ts'
import type { TypeInfo } from '../../../org/w3c/dom/TypeInfo.d.ts'
export interface Element extends Object, Node{
    getAttribute(arg0: string): string;
    getAttributeNS(arg0: string, arg1: string): string;
    getAttributeNode(arg0: string): Attr;
    getAttributeNodeNS(arg0: string, arg1: string): Attr;
    getElementsByTagName(arg0: string): NodeList;
    getElementsByTagNameNS(arg0: string, arg1: string): NodeList;
    getSchemaTypeInfo(): TypeInfo;
    getTagName(): string;
    hasAttribute(arg0: string): boolean;
    hasAttributeNS(arg0: string, arg1: string): boolean;
    removeAttribute(arg0: string): void;
    removeAttributeNS(arg0: string, arg1: string): void;
    removeAttributeNode(arg0: Attr): Attr;
    setAttribute(arg0: string, arg1: string): void;
    setAttributeNS(arg0: string, arg1: string, arg2: string): void;
    setAttributeNode(arg0: Attr): Attr;
    setAttributeNodeNS(arg0: Attr): Attr;
    setIdAttribute(arg0: string, arg1: boolean): void;
    setIdAttributeNS(arg0: string, arg1: string, arg2: boolean): void;
    setIdAttributeNode(arg0: Attr, arg1: boolean): void;
}