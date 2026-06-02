import type { TreePath } from '../../../javax/swing/tree/TreePath.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RowMapper extends Object{
    getRowsForPaths(arg0: TreePath[]): number[];
}