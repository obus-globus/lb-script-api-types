import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { DigraphFactory } from '../../../../de/odysseus/ithaka/digraph/DigraphFactory.d.ts'
import type { DoubledDigraph } from '../../../../de/odysseus/ithaka/digraph/DoubledDigraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Digraphs extends Object {
    static closure<V extends unknown>(paramarg0: Digraph<V>, paramarg1: V): V[];
    static copy<V extends unknown, G extends Digraph<V>>(paramarg0: Digraph<V>, paramarg1: DigraphFactory<G>): G;
    static dfs<V extends unknown>(paramarg0: Digraph<V>, paramarg1: V, paramarg2: Object[], paramarg3: Object[]): void;
    static dfs2<V extends unknown>(paramarg0: Digraph<V>, paramarg1: V, paramarg2: Object[], paramarg3: Object[]): void;
    static emptyDigraph<V extends unknown>(): DoubledDigraph<V>;
    static isAcyclic<V extends unknown>(paramarg0: Digraph<V>): boolean;
    static isEquivalent<V extends unknown>(paramarg0: Digraph<V>, paramarg1: Digraph<V>, paramarg2: boolean): boolean;
    static isReachable<V extends unknown>(paramarg0: Digraph<V>, paramarg1: V, paramarg2: V): boolean;
    static isStronglyConnected<V extends unknown>(paramarg0: Digraph<V>): boolean;
    static isTriviallyAcyclic<V extends unknown>(paramarg0: Digraph<V>): boolean;
    static reverse<V extends unknown, G extends Digraph<V>>(paramarg0: Digraph<V>, paramarg1: DigraphFactory<G>): G;
    static scc<V extends unknown>(paramarg0: Digraph<V>): V[][];
    static subgraph<V extends unknown, G extends Digraph<V>>(paramarg0: Digraph<V>, paramarg1: V[], paramarg2: DigraphFactory<G>): G;
    static toposort<V extends unknown>(paramarg0: Digraph<V>, paramarg1: boolean): V[];
    static unmodifiableDigraph<V extends unknown>(paramarg0: Digraph<V>): Digraph<V>;
    static wcc<V extends unknown>(paramarg0: Digraph<V>): V[][];
    constructor()
}