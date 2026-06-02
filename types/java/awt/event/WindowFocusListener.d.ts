import type { WindowEvent } from '../../../java/awt/event/WindowEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WindowFocusListener extends EventListener, Object{
    windowGainedFocus(arg0: WindowEvent): void;
    windowLostFocus(arg0: WindowEvent): void;
}