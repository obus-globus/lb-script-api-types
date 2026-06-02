import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { TreeExpansionEvent } from '../../../javax/swing/event/TreeExpansionEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeExpansionListener extends EventListener, Object{
    treeCollapsed(arg0: TreeExpansionEvent): void;
    treeExpanded(arg0: TreeExpansionEvent): void;
}