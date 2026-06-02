import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { ListSelectionEvent } from '../../../javax/swing/event/ListSelectionEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ListSelectionListener extends EventListener, Object{
    valueChanged(arg0: ListSelectionEvent): void;
}