import type { DragSourceDragEvent } from '../../../java/awt/dnd/DragSourceDragEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DragSourceMotionListener extends EventListener, Object{
    dragMouseMoved(arg0: DragSourceDragEvent): void;
}