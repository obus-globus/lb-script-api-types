import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { TreeSelectionEvent } from '../../../javax/swing/event/TreeSelectionEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeSelectionListener extends EventListener, Object{
    valueChanged(arg0: TreeSelectionEvent): void;
}