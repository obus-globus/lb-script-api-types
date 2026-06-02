import type { WindowAdapter } from '../../java/awt/event/WindowAdapter.d.ts'
import type { WindowEvent } from '../../java/awt/event/WindowEvent.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { JPopupMenu } from '../../javax/swing/JPopupMenu.d.ts'
export class JMenu$WinListener extends WindowAdapter implements Serializable {
    constructor(null_: JMenu$WinListener, arg1: JPopupMenu)
    // private popupMenu: JPopupMenu;
    windowClosing(arg0: WindowEvent): void;
}