import type { DragSourceDragEvent } from '../../../java/awt/dnd/DragSourceDragEvent.d.ts'
import type { DragSourceDropEvent } from '../../../java/awt/dnd/DragSourceDropEvent.d.ts'
import type { DragSourceEvent } from '../../../java/awt/dnd/DragSourceEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DragSourceListener extends EventListener, Object{
    dragDropEnd(arg0: DragSourceDropEvent): void;
    dragEnter(arg0: DragSourceDragEvent): void;
    dragExit(arg0: DragSourceEvent): void;
    dragOver(arg0: DragSourceDragEvent): void;
    dropActionChanged(arg0: DragSourceDragEvent): void;
}