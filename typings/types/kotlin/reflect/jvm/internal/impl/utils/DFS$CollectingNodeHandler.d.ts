import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DFS$AbstractNodeHandler } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$AbstractNodeHandler.d.ts'
export abstract class DFS$CollectingNodeHandler<N extends unknown, R extends unknown, C extends R[]> extends DFS$AbstractNodeHandler<N, C> {
    constructor(arg0: C)
    // private result: C;
    result(): C;
}