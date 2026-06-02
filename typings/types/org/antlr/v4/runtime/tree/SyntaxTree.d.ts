import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Interval } from '../../../../../org/antlr/v4/runtime/misc/Interval.d.ts'
import type { Tree } from '../../../../../org/antlr/v4/runtime/tree/Tree.d.ts'
export interface SyntaxTree extends Object, Tree{
    getSourceInterval(): Interval;
}