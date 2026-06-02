import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TreePath extends Object implements Serializable {
    constructor()
    constructor(arg0: TreePath, arg1: Object)
    constructor(arg0: Object)
    constructor(arg0: Object[])
    constructor(arg0: Object[], arg1: number)
    readonly lastPathComponent: Object;
    readonly parentPath: TreePath;
    equals(arg0: Object | null): boolean;
    getLastPathComponent(): Object;
    getParentPath(): TreePath;
    getPath(): Object[];
    getPathComponent(arg0: number): Object;
    getPathCount(): number;
    hashCode(): number;
    isDescendant(arg0: TreePath): boolean;
    pathByAddingChild(arg0: Object): TreePath;
    toString(): string;
}