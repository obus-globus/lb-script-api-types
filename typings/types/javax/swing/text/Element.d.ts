import type { AttributeSet } from '../../../javax/swing/text/AttributeSet.d.ts'
import type { Document } from '../../../javax/swing/text/Document.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Element extends Object{
    getAttributes(): AttributeSet;
    getDocument(): Document;
    getElement(arg0: number): Element;
    getElementCount(): number;
    getElementIndex(arg0: number): number;
    getEndOffset(): number;
    getName(): string;
    getParentElement(): Element;
    getStartOffset(): number;
    isLeaf(): boolean;
}