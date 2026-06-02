import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { ChangeEvent } from '../../../javax/swing/event/ChangeEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CellEditorListener extends EventListener, Object{
    editingCanceled(arg0: ChangeEvent): void;
    editingStopped(arg0: ChangeEvent): void;
}