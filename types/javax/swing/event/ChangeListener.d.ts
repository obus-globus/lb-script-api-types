import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { ChangeEvent } from '../../../javax/swing/event/ChangeEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChangeListener extends EventListener, Object{
    stateChanged(arg0: ChangeEvent): void;
}