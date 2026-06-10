import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { BatchNorm } from '../../../../ai/djl/nn/norm/BatchNorm.d.ts'
import type { BatchNorm$BaseBuilder } from '../../../../ai/djl/nn/norm/BatchNorm$BaseBuilder.d.ts'
import type { GhostBatchNorm$Builder } from '../../../../ai/djl/nn/norm/GhostBatchNorm$Builder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Batchifier } from '../../../../ai/djl/translate/Batchifier.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GhostBatchNorm extends BatchNorm {
    static batchNorm(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray): (Object | null)[];
    static batchNorm(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: NDArray, paramarg4: NDArray): (Object | null)[];
    static batchNorm(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: NDArray, paramarg4: NDArray, paramarg5: number): (Object | null)[];
    static batchNorm(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: NDArray, paramarg4: NDArray, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: boolean): (Object | null)[];
    static builder(): BatchNorm$BaseBuilder<Object>;
    static builder(): GhostBatchNorm$Builder;
    constructor(arg0: GhostBatchNorm$Builder)
    // private batchifier: Batchifier;
    // private virtualBatchSize: number;
    batchify(arg0: (Object | null)[][]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<string, Object>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<string, Object>[]): (Object | null)[];
    split(arg0: (Object | null)[]): (Object | null)[][];
    squeezeExtraDimensions(arg0: (Object | null)[]): (Object | null)[];
}