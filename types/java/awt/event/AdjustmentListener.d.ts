import type { AdjustmentEvent } from '../../../java/awt/event/AdjustmentEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AdjustmentListener extends EventListener, Object{
    adjustmentValueChanged(arg0: AdjustmentEvent): void;
}