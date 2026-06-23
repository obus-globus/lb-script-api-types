import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DoubledDigraph<V extends unknown> extends Digraph<V>, Object{
    getInDegree(arg0: V): number;
    reverse(): DoubledDigraph<V>;
    sources(arg0: V): V[];
}