import type { Font } from '../../../java/awt/Font.d.ts'
import type { Menu } from '../../../java/awt/Menu.d.ts'
import type { MenuComponentPeer } from '../../../java/awt/peer/MenuComponentPeer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MenuBarPeer extends MenuComponentPeer, Object{
    addHelpMenu(arg0: Menu): void;
    addMenu(arg0: Menu): void;
    delMenu(arg0: number): void;
    dispose(): void;
    setFont(arg0: Font): void;
}