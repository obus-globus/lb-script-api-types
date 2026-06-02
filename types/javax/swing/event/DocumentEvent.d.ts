import type { DocumentEvent$ElementChange } from '../../../javax/swing/event/DocumentEvent$ElementChange.d.ts'
import type { DocumentEvent$EventType } from '../../../javax/swing/event/DocumentEvent$EventType.d.ts'
import type { Document } from '../../../javax/swing/text/Document.d.ts'
import type { Element } from '../../../javax/swing/text/Element.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DocumentEvent extends Object{
    getChange(arg0: Element): DocumentEvent$ElementChange;
    getDocument(): Document;
    getLength(): number;
    getOffset(): number;
    getType(): DocumentEvent$EventType;
}