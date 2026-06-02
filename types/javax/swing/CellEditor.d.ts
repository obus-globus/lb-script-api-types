import type { EventObject } from '../../java/util/EventObject.d.ts'
import type { CellEditorListener } from '../../javax/swing/event/CellEditorListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface CellEditor extends Object{
    addCellEditorListener(arg0: CellEditorListener): void;
    cancelCellEditing(): void;
    getCellEditorValue(): Object;
    isCellEditable(arg0: EventObject): boolean;
    removeCellEditorListener(arg0: CellEditorListener): void;
    shouldSelectCell(arg0: EventObject): boolean;
    stopCellEditing(): boolean;
}