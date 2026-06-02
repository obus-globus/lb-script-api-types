import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { AbstractAccuracy } from '../../../../ai/djl/training/evaluator/AbstractAccuracy.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Accuracy extends AbstractAccuracy {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    accuracyHelper(arg0: (Object | null)[], arg1: (Object | null)[]): Pair<number, NDArray>;
}