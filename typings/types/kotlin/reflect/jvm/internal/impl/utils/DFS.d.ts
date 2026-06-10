import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DFS$Neighbors } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$Neighbors.d.ts'
import type { DFS$NodeHandler } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$NodeHandler.d.ts'
import type { DFS$Visited } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$Visited.d.ts'
export class DFS extends Object {
    static dfs(paramarg0: (Object | null)[], paramarg1: DFS$Neighbors<Object>, paramarg2: DFS$NodeHandler<Object, Object>): Object | null;
    static dfs(paramarg0: (Object | null)[], paramarg1: DFS$Neighbors<Object>, paramarg2: DFS$Visited<Object>, paramarg3: DFS$NodeHandler<Object, Object>): Object | null;
    static doDfs(paramarg0: Object | null, paramarg1: DFS$Neighbors<Object>, paramarg2: DFS$Visited<Object>, paramarg3: DFS$NodeHandler<Object, Object>): void;
    static ifAny(paramarg0: (Object | null)[], paramarg1: DFS$Neighbors<Object>, paramarg2: (param0: Object | null) => boolean): boolean;
}