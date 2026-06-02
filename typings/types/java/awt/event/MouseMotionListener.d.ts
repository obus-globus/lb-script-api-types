import type { MouseEvent } from '../../../java/awt/event/MouseEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MouseMotionListener extends EventListener, Object{
    mouseDragged(arg0: MouseEvent): void;
    mouseMoved(arg0: MouseEvent): void;
}