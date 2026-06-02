import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { MenuDragMouseEvent } from '../../../javax/swing/event/MenuDragMouseEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MenuDragMouseListener extends EventListener, Object{
    menuDragMouseDragged(arg0: MenuDragMouseEvent): void;
    menuDragMouseEntered(arg0: MenuDragMouseEvent): void;
    menuDragMouseExited(arg0: MenuDragMouseEvent): void;
    menuDragMouseReleased(arg0: MenuDragMouseEvent): void;
}