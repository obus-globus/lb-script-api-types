import type { Object } from '../../../java/lang/Object.d.ts'
import type { Element } from '../../../org/w3c/dom/Element.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
import type { TypeInfo } from '../../../org/w3c/dom/TypeInfo.d.ts'
export interface Attr extends Object, Node{
    getName(): string;
    getOwnerElement(): Element;
    getSchemaTypeInfo(): TypeInfo;
    getSpecified(): boolean;
    getValue(): string;
    isId(): boolean;
    setValue(arg0: string): void;
}