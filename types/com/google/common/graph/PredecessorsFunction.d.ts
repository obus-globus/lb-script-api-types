import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PredecessorsFunction<N extends Object | number | string | boolean> extends Object{
    predecessors(node: N): N[];
}