import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { TreeExpansionEvent } from '../../../javax/swing/event/TreeExpansionEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeWillExpandListener extends EventListener, Object{
    treeWillCollapse(arg0: TreeExpansionEvent): void;
    treeWillExpand(arg0: TreeExpansionEvent): void;
}