import type { Font } from '../../../java/awt/Font.d.ts'
import type { MenuItemPeer } from '../../../java/awt/peer/MenuItemPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface CheckboxMenuItemPeer extends MenuItemPeer, Object{
    dispose(): void;
    setEnabled(arg0: boolean): void;
    setFont(arg0: Font): void;
    setLabel(arg0: string): void;
    setState(arg0: boolean): void;
}