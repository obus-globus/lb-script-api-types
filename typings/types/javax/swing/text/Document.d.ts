import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { DocumentListener } from '../../../javax/swing/event/DocumentListener.d.ts'
import type { UndoableEditListener } from '../../../javax/swing/event/UndoableEditListener.d.ts'
import type { AttributeSet } from '../../../javax/swing/text/AttributeSet.d.ts'
import type { Element } from '../../../javax/swing/text/Element.d.ts'
import type { Position } from '../../../javax/swing/text/Position.d.ts'
import type { Segment } from '../../../javax/swing/text/Segment.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Document extends Object{
    addDocumentListener(arg0: DocumentListener): void;
    addUndoableEditListener(arg0: UndoableEditListener): void;
    createPosition(arg0: number): Position;
    getDefaultRootElement(): Element;
    getEndPosition(): Position;
    getLength(): number;
    getProperty(arg0: Object): Object;
    getRootElements(): Element[];
    getStartPosition(): Position;
    getText(arg0: number, arg1: number): string;
    getText(arg0: number, arg1: number, arg2: Segment): void;
    insertString(arg0: number, arg1: string, arg2: AttributeSet): void;
    putProperty(arg0: Object, arg1: Object): void;
    remove(arg0: number, arg1: number): void;
    removeDocumentListener(arg0: DocumentListener): void;
    removeUndoableEditListener(arg0: UndoableEditListener): void;
    render(arg0: () => void): void;
}