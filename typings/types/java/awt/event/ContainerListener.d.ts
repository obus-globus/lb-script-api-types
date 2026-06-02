import type { ContainerEvent } from '../../../java/awt/event/ContainerEvent.d.ts'
import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ContainerListener extends EventListener, Object{
    componentAdded(arg0: ContainerEvent): void;
    componentRemoved(arg0: ContainerEvent): void;
}