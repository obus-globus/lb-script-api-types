import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDArrayIndexer } from '../../../../ai/djl/ndarray/index/NDArrayIndexer.d.ts'
import type { NDIndex } from '../../../../ai/djl/ndarray/index/NDIndex.d.ts'
import type { NDIndexBooleans } from '../../../../ai/djl/ndarray/index/dim/NDIndexBooleans.d.ts'
import type { NDIndexFullPick } from '../../../../ai/djl/ndarray/index/full/NDIndexFullPick.d.ts'
import type { NDIndexFullSlice } from '../../../../ai/djl/ndarray/index/full/NDIndexFullSlice.d.ts'
import type { NDIndexFullTake } from '../../../../ai/djl/ndarray/index/full/NDIndexFullTake.d.ts'
import type { PtNDManager } from '../../../../ai/djl/pytorch/engine/PtNDManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class PtNDArrayIndexer extends NDArrayIndexer {
    constructor(arg0: PtNDManager)
    // private manager: PtNDManager;
    get(arg0: NDArray, arg1: NDIndex): NDArray;
    get(arg0: NDArray, arg1: NDIndexFullPick): NDArray;
    get(arg0: NDArray, arg1: NDIndexFullSlice): NDArray;
    get(arg0: NDArray, arg1: NDIndexFullTake): NDArray;
    set(arg0: NDArray, arg1: NDIndex, arg2: Object): void;
    set(arg0: NDArray, arg1: NDIndexBooleans, arg2: NDArray): void;
    set(arg0: NDArray, arg1: NDIndexFullSlice, arg2: NDArray): void;
    set(arg0: NDArray, arg1: NDIndexFullSlice, arg2: Number): void;
}