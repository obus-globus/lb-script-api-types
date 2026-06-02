import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DFS$Neighbors<N extends Object | number | string | boolean> extends Object{
    getNeighbors(arg0: N): N[];
}