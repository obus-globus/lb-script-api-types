import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { PopupMenuEvent } from '../../../javax/swing/event/PopupMenuEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PopupMenuListener extends EventListener, Object{
    popupMenuCanceled(arg0: PopupMenuEvent): void;
    popupMenuWillBecomeInvisible(arg0: PopupMenuEvent): void;
    popupMenuWillBecomeVisible(arg0: PopupMenuEvent): void;
}