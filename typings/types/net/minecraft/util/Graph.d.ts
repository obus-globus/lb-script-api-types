import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Graph extends Object {
    static depthFirstSearch<T extends unknown>(paramedges: Map<T, T[]>, paramdiscovered: T[], paramcurrentlyVisiting: T[], paramreverseTopologicalOrder: (param0: T) => void, paramcurrent: T): boolean;
    private constructor()
}