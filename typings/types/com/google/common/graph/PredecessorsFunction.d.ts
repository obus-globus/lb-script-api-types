import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PredecessorsFunction<N extends unknown> extends Object{
    predecessors(node: N): N[];
}