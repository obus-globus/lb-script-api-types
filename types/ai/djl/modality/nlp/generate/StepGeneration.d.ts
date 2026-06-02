import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StepGeneration extends Object {
    static beamStepGeneration(paramarg0: NDArray, paramarg1: NDArray, paramarg2: number, paramarg3: number): (Object | null)[];
    static constrastiveStepGeneration(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: NDArray, paramarg4: NDArray, paramarg5: number): (Object | null)[];
    static greedyStepGen(paramarg0: NDArray): NDArray;
    private constructor()
}