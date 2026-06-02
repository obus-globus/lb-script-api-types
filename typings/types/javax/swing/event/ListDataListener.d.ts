import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { ListDataEvent } from '../../../javax/swing/event/ListDataEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ListDataListener extends EventListener, Object{
    contentsChanged(arg0: ListDataEvent): void;
    intervalAdded(arg0: ListDataEvent): void;
    intervalRemoved(arg0: ListDataEvent): void;
}