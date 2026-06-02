import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AWTEventListener extends EventListener, Object{
    eventDispatched(arg0: AWTEvent): void;
}