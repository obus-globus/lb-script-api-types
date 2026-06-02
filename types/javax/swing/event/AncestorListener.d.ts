import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { AncestorEvent } from '../../../javax/swing/event/AncestorEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AncestorListener extends EventListener, Object{
    ancestorAdded(arg0: AncestorEvent): void;
    ancestorMoved(arg0: AncestorEvent): void;
    ancestorRemoved(arg0: AncestorEvent): void;
}