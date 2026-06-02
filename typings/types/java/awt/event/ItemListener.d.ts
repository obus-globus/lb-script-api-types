import type { ItemEvent } from '../../../java/awt/event/ItemEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ItemListener extends EventListener, Object{
    itemStateChanged(arg0: ItemEvent): void;
}