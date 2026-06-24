import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { TreeVisitor } from '../../../../com/sun/source/tree/TreeVisitor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Tree extends Object{
    accept<R extends unknown, D extends unknown>(arg0: TreeVisitor<R, D>, arg1: D): R;
    getKind(): Tree$Kind;
}