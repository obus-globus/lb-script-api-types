import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { BatchNorm$BaseBuilder } from '../../../../ai/djl/nn/norm/BatchNorm$BaseBuilder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BatchNorm extends AbstractBlock {
    static batchNorm(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray): (Object | null)[];
    static batchNorm(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: NDArray, paramarg4: NDArray): (Object | null)[];
    static batchNorm(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: NDArray, paramarg4: NDArray, paramarg5: number): (Object | null)[];
    static batchNorm(paramarg0: NDArray, paramarg1: NDArray, paramarg2: NDArray, paramarg3: NDArray, paramarg4: NDArray, paramarg5: number, paramarg6: number, paramarg7: number, paramarg8: boolean): (Object | null)[];
    static builder(): BatchNorm$BaseBuilder<Object>;
    constructor(arg0: BatchNorm$BaseBuilder<Object>)
    // private axis: number;
    // private beta: Parameter;
    // private center: boolean;
    // private epsilon: number;
    // private gamma: Parameter;
    // private inChannels: number;
    // private momentum: number;
    // private runningMean: Parameter;
    // private runningVar: Parameter;
    // private scale: boolean;
    beforeInitialize(arg0: Shape[]): void;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<K, V>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    loadMetadata(arg0: number, arg1: DataInputStream): void;
    prepare(arg0: Shape[]): void;
    saveMetadata(arg0: DataOutputStream): void;
}