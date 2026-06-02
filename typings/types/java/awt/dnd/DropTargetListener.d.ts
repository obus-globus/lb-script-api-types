import type { DropTargetDragEvent } from '../../../java/awt/dnd/DropTargetDragEvent.d.ts'
import type { DropTargetDropEvent } from '../../../java/awt/dnd/DropTargetDropEvent.d.ts'
import type { DropTargetEvent } from '../../../java/awt/dnd/DropTargetEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DropTargetListener extends EventListener, Object{
    dragEnter(arg0: DropTargetDragEvent): void;
    dragExit(arg0: DropTargetEvent): void;
    dragOver(arg0: DropTargetDragEvent): void;
    drop(arg0: DropTargetDropEvent): void;
    dropActionChanged(arg0: DropTargetDragEvent): void;
}