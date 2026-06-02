import type { EventObject } from '../../../java/util/EventObject.d.ts'
import type { TreePath } from '../../../javax/swing/tree/TreePath.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TreeModelEvent extends EventObject {
    constructor(arg0: Object, arg1: TreePath)
    constructor(arg0: Object, arg1: TreePath, arg2: number[], arg3: Object[])
    constructor(arg0: Object, arg1: Object[])
    constructor(arg0: Object, arg1: Object[], arg2: number[], arg3: Object[])
    childIndices: number[];
    children: Object[];
    path: TreePath;
    getChildIndices(): number[];
    getChildren(): Object[];
    getPath(): Object[];
    getTreePath(): TreePath;
    toString(): string;
}