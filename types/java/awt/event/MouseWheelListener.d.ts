import type { MouseWheelEvent } from '../../../java/awt/event/MouseWheelEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MouseWheelListener extends EventListener, Object{
    mouseWheelMoved(arg0: MouseWheelEvent): void;
}