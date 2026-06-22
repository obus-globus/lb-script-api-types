import type { Font } from '../../../java/awt/Font.d.ts'
import type { MenuItem } from '../../../java/awt/MenuItem.d.ts'
import type { MenuItemPeer } from '../../../java/awt/peer/MenuItemPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MenuPeer extends MenuItemPeer, Object{
    addItem(arg0: MenuItem): void;
    delItem(arg0: number): void;
    dispose(): void;
    setEnabled(arg0: boolean): void;
    setFont(arg0: Font): void;
    setLabel(arg0: string): void;
}