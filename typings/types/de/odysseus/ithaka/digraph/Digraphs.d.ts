import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { DigraphFactory } from '../../../../de/odysseus/ithaka/digraph/DigraphFactory.d.ts'
import type { DoubledDigraph } from '../../../../de/odysseus/ithaka/digraph/DoubledDigraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Digraphs extends Object {
    static closure(paramarg0: Digraph<Object>, paramarg1: Object | null): (Object | null)[];
    static copy(paramarg0: Digraph<Object>, paramarg1: DigraphFactory<Object>): Object | null;
    static dfs(paramarg0: Digraph<Object>, paramarg1: Object | null, paramarg2: Object[], paramarg3: Object[]): void;
    static dfs2(paramarg0: Digraph<Object>, paramarg1: Object | null, paramarg2: Object[], paramarg3: Object[]): void;
    static emptyDigraph(): DoubledDigraph<Object>;
    static isAcyclic(paramarg0: Digraph<Object>): boolean;
    static isEquivalent(paramarg0: Digraph<Object>, paramarg1: Digraph<Object>, paramarg2: boolean): boolean;
    static isReachable(paramarg0: Digraph<Object>, paramarg1: Object | null, paramarg2: Object | null): boolean;
    static isStronglyConnected(paramarg0: Digraph<Object>): boolean;
    static isTriviallyAcyclic(paramarg0: Digraph<Object>): boolean;
    static reverse(paramarg0: Digraph<Object>, paramarg1: DigraphFactory<Object>): Object | null;
    static scc(paramarg0: Digraph<Object>): (Object | null)[][];
    static subgraph(paramarg0: Digraph<Object>, paramarg1: (Object | null)[], paramarg2: DigraphFactory<Object>): Object | null;
    static toposort(paramarg0: Digraph<Object>, paramarg1: boolean): (Object | null)[];
    static unmodifiableDigraph(paramarg0: Digraph<Object>): Digraph<Object>;
    static wcc(paramarg0: Digraph<Object>): (Object | null)[][];
    constructor()
}