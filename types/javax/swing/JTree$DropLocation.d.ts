import type { Point } from '../../java/awt/Point.d.ts'
import type { TransferHandler$DropLocation } from '../../javax/swing/TransferHandler$DropLocation.d.ts'
import type { TreePath } from '../../javax/swing/tree/TreePath.d.ts'
export class JTree$DropLocation extends TransferHandler$DropLocation {
    private constructor(arg0: Point, arg1: TreePath, arg2: number)
    // private index: number;
    readonly path: TreePath;
    getChildIndex(): number;
    getPath(): TreePath;
    toString(): string;
}