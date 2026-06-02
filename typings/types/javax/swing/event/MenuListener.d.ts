import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { MenuEvent } from '../../../javax/swing/event/MenuEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MenuListener extends EventListener, Object{
    menuCanceled(arg0: MenuEvent): void;
    menuDeselected(arg0: MenuEvent): void;
    menuSelected(arg0: MenuEvent): void;
}