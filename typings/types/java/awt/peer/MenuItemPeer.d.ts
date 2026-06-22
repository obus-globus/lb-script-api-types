import type { Font } from '../../../java/awt/Font.d.ts'
import type { MenuComponentPeer } from '../../../java/awt/peer/MenuComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MenuItemPeer extends MenuComponentPeer, Object{
    dispose(): void;
    setEnabled(arg0: boolean): void;
    setFont(arg0: Font): void;
    setLabel(arg0: string): void;
}