import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DFS$Neighbors } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$Neighbors.d.ts'
import type { DFS$NodeHandler } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$NodeHandler.d.ts'
import type { DFS$Visited } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/DFS$Visited.d.ts'
export class DFS extends Object {
    static dfs<N extends unknown, R extends unknown>(paramarg0: N[], paramarg1: DFS$Neighbors<N>, paramarg2: DFS$NodeHandler<N, R>): R;
    static dfs<N extends unknown, R extends unknown>(paramarg0: N[], paramarg1: DFS$Neighbors<N>, paramarg2: DFS$Visited<N>, paramarg3: DFS$NodeHandler<N, R>): R;
    static doDfs<N extends unknown>(paramarg0: N, paramarg1: DFS$Neighbors<N>, paramarg2: DFS$Visited<N>, paramarg3: DFS$NodeHandler<N, Object>): void;
    static ifAny<N extends unknown>(paramarg0: N[], paramarg1: DFS$Neighbors<N>, paramarg2: (param0: N) => boolean): boolean;
}