import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DFS$NodeHandler } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$NodeHandler.d.ts'
export abstract class DFS$AbstractNodeHandler<N extends unknown, R extends unknown> extends Object implements DFS$NodeHandler<N, R> {
    constructor()
    afterChildren(arg0: N): void;
    beforeChildren(arg0: N): boolean;
}