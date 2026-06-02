import type { Event } from '../../../java/awt/Event.d.ts'
import type { MenuPeer } from '../../../java/awt/peer/MenuPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PopupMenuPeer extends MenuPeer, Object{
    show(arg0: Event): void;
}