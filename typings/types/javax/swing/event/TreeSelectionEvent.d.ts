import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { TreePath } from '../../../javax/swing/tree/TreePath.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TreeSelectionEvent extends EventObject {
    constructor(arg0: Object, arg1: TreePath, arg2: boolean, arg3: TreePath, arg4: TreePath)
    constructor(arg0: Object, arg1: TreePath[], arg2: boolean[], arg3: TreePath, arg4: TreePath)
    // private areNew: boolean[];
    newLeadSelectionPath: TreePath;
    oldLeadSelectionPath: TreePath;
    paths: TreePath[];
    cloneWithSource(arg0: Object): Object;
    getNewLeadSelectionPath(): TreePath;
    getOldLeadSelectionPath(): TreePath;
    getPath(): TreePath;
    getPaths(): TreePath[];
    isAddedPath(): boolean;
    isAddedPath(arg0: TreePath): boolean;
    isAddedPath(arg0: number): boolean;
}