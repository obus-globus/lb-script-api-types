import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { MenuKeyEvent } from '../../../javax/swing/event/MenuKeyEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MenuKeyListener extends EventListener, Object{
    menuKeyPressed(arg0: MenuKeyEvent): void;
    menuKeyReleased(arg0: MenuKeyEvent): void;
    menuKeyTyped(arg0: MenuKeyEvent): void;
}