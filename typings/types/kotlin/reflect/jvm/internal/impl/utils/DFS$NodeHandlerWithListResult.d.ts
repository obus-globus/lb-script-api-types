import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DFS$CollectingNodeHandler } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$CollectingNodeHandler.d.ts'
export abstract class DFS$NodeHandlerWithListResult<N extends Object | number | string | boolean, R extends Object | number | string | boolean> extends DFS$CollectingNodeHandler<N, R, R[]> {
    constructor()
}