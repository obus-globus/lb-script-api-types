import type { WindowEvent } from '../../../java/awt/event/WindowEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WindowListener extends EventListener, Object{
    windowActivated(arg0: WindowEvent): void;
    windowClosed(arg0: WindowEvent): void;
    windowClosing(arg0: WindowEvent): void;
    windowDeactivated(arg0: WindowEvent): void;
    windowDeiconified(arg0: WindowEvent): void;
    windowIconified(arg0: WindowEvent): void;
    windowOpened(arg0: WindowEvent): void;
}