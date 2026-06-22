import type { Event } from '../../../java/awt/Event.d.ts'
import type { Font } from '../../../java/awt/Font.d.ts'
import type { MenuItem } from '../../../java/awt/MenuItem.d.ts'
import type { MenuPeer } from '../../../java/awt/peer/MenuPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PopupMenuPeer extends MenuPeer, Object{
    addItem(arg0: MenuItem): void;
    delItem(arg0: number): void;
    dispose(): void;
    setEnabled(arg0: boolean): void;
    setFont(arg0: Font): void;
    setLabel(arg0: string): void;
    show(arg0: Event): void;
}