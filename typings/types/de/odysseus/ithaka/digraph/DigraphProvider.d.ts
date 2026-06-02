import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DigraphProvider<T extends Object | number | string | boolean, G extends Digraph<Object>> extends Object{
    get(arg0: T): G;
}