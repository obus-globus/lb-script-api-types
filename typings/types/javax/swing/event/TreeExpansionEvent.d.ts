import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { TreePath } from '../../../javax/swing/tree/TreePath.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TreeExpansionEvent extends EventObject {
    constructor(arg0: Object, arg1: TreePath)
    path: TreePath;
    getPath(): TreePath;
}