import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DigraphFactory<G extends Digraph<Object>> extends Object{
    create(): G;
}