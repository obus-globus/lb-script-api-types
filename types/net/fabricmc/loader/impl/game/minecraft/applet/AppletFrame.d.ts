import type { Frame } from '../../../../../../../java/awt/Frame.d.ts'
import type { WindowEvent } from '../../../../../../../java/awt/event/WindowEvent.d.ts'
import type { WindowListener } from '../../../../../../../java/awt/event/WindowListener.d.ts'
import type { ImageIcon } from '../../../../../../../javax/swing/ImageIcon.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AppletLauncher } from '../../../../../../../net/fabricmc/loader/impl/game/minecraft/applet/AppletLauncher.d.ts'
export class AppletFrame extends Frame implements WindowListener {
    static ABORT: number;
    static ALLBITS: number;
    static BOTTOM_ALIGNMENT: number;
    static CENTER_ALIGNMENT: number;
    static CROSSHAIR_CURSOR: number;
    static DEFAULT_CURSOR: number;
    static ERROR: number;
    static E_RESIZE_CURSOR: number;
    static FRAMEBITS: number;
    static HAND_CURSOR: number;
    static HEIGHT: number;
    static ICONIFIED: number;
    static LEFT_ALIGNMENT: number;
    static MAXIMIZED_BOTH: number;
    static MAXIMIZED_HORIZ: number;
    static MAXIMIZED_VERT: number;
    static MOVE_CURSOR: number;
    static NE_RESIZE_CURSOR: number;
    static NORMAL: number;
    static NW_RESIZE_CURSOR: number;
    static N_RESIZE_CURSOR: number;
    static PROPERTIES: number;
    static RIGHT_ALIGNMENT: number;
    static SE_RESIZE_CURSOR: number;
    static SOMEBITS: number;
    static SW_RESIZE_CURSOR: number;
    static S_RESIZE_CURSOR: number;
    static TEXT_CURSOR: number;
    static TOP_ALIGNMENT: number;
    static WAIT_CURSOR: number;
    static WIDTH: number;
    static W_RESIZE_CURSOR: number;
    static getFrames(): (Object | null)[];
    static getOwnerlessWindows(): (Object | null)[];
    static getWindows(): (Object | null)[];
    constructor(arg0: string, arg1: ImageIcon)
    // private applet: AppletLauncher;
    launch(arg0: string[]): void;
    windowActivated(arg0: WindowEvent): void;
    windowClosed(arg0: WindowEvent): void;
    windowClosing(arg0: WindowEvent): void;
    windowDeactivated(arg0: WindowEvent): void;
    windowDeiconified(arg0: WindowEvent): void;
    windowIconified(arg0: WindowEvent): void;
    windowOpened(arg0: WindowEvent): void;
}