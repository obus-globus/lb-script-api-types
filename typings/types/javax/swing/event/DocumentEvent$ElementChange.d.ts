import type { Element } from '../../../javax/swing/text/Element.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DocumentEvent$ElementChange extends Object{
    getChildrenAdded(): Element[];
    getChildrenRemoved(): Element[];
    getElement(): Element;
    getIndex(): number;
}