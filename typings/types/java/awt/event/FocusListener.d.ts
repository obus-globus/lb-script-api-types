import type { FocusEvent } from '../../../java/awt/event/FocusEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FocusListener extends EventListener, Object{
    focusGained(arg0: FocusEvent): void;
    focusLost(arg0: FocusEvent): void;
}