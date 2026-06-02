import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { UndoableEdit } from '../../../javax/swing/undo/UndoableEdit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UndoableEditEvent extends EventObject {
    constructor(arg0: Object, arg1: UndoableEdit)
    // private myEdit: UndoableEdit;
    getEdit(): UndoableEdit;
}