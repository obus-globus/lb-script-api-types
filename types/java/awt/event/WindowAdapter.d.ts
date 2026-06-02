import type { WindowEvent } from '../../../java/awt/event/WindowEvent.d.ts'
import type { WindowFocusListener } from '../../../java/awt/event/WindowFocusListener.d.ts'
import type { WindowListener } from '../../../java/awt/event/WindowListener.d.ts'
import type { WindowStateListener } from '../../../java/awt/event/WindowStateListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class WindowAdapter extends Object implements WindowFocusListener, WindowListener, WindowStateListener {
    constructor()
    windowActivated(arg0: WindowEvent): void;
    windowClosed(arg0: WindowEvent): void;
    windowClosing(arg0: WindowEvent): void;
    windowDeactivated(arg0: WindowEvent): void;
    windowDeiconified(arg0: WindowEvent): void;
    windowGainedFocus(arg0: WindowEvent): void;
    windowIconified(arg0: WindowEvent): void;
    windowLostFocus(arg0: WindowEvent): void;
    windowOpened(arg0: WindowEvent): void;
    windowStateChanged(arg0: WindowEvent): void;
}