import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Graph extends Object {
    static depthFirstSearch<T extends unknown>(paramedges: JavaMap<T, T[]>, paramdiscovered: T[], paramcurrentlyVisiting: T[], paramreverseTopologicalOrder: (param0: T) => void, paramcurrent: T): boolean;
    private constructor()
}