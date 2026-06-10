import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Graph extends Object {
    static depthFirstSearch(paramedges: Map<Object | null, (Object | null)[]>, paramdiscovered: (Object | null)[], paramcurrentlyVisiting: (Object | null)[], paramreverseTopologicalOrder: (param0: Object | null) => void, paramcurrent: Object | null): boolean;
    private constructor()
}