import type { MenuComponentPeer } from '../../../java/awt/peer/MenuComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MenuItemPeer extends MenuComponentPeer, Object{
    setEnabled(arg0: boolean): void;
    setLabel(arg0: string): void;
}