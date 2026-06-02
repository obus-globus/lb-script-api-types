import type { EventListener } from '../../../java/util/EventListener.d.ts'
import type { TreeModelEvent } from '../../../javax/swing/event/TreeModelEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TreeModelListener extends EventListener, Object{
    treeNodesChanged(arg0: TreeModelEvent): void;
    treeNodesInserted(arg0: TreeModelEvent): void;
    treeNodesRemoved(arg0: TreeModelEvent): void;
    treeStructureChanged(arg0: TreeModelEvent): void;
}