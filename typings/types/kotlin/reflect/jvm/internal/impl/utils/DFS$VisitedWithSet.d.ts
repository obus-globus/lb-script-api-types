import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DFS$Visited } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$Visited.d.ts'
export class DFS$VisitedWithSet<N extends Object | number | string | boolean> extends Object implements DFS$Visited<N> {
    constructor()
    constructor(arg0: N[])
    // private visited: N[];
    checkAndMarkVisited(arg0: N): boolean;
}