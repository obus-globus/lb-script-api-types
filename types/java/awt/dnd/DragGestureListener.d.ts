import type { DragGestureEvent } from '../../../java/awt/dnd/DragGestureEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DragGestureListener extends EventListener, Object{
    dragGestureRecognized(arg0: DragGestureEvent): void;
}