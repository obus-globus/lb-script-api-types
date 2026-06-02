import type { WindowEvent } from '../../../java/awt/event/WindowEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WindowStateListener extends EventListener, Object{
    windowStateChanged(arg0: WindowEvent): void;
}