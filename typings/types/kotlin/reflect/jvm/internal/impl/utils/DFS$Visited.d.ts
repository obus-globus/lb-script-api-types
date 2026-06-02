import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DFS$Visited<N extends Object | number | string | boolean> extends Object{
    checkAndMarkVisited(arg0: N): boolean;
}