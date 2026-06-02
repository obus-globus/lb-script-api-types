import type { MouseEvent } from '../../../java/awt/event/MouseEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MouseListener extends EventListener, Object{
    mouseClicked(arg0: MouseEvent): void;
    mouseEntered(arg0: MouseEvent): void;
    mouseExited(arg0: MouseEvent): void;
    mousePressed(arg0: MouseEvent): void;
    mouseReleased(arg0: MouseEvent): void;
}