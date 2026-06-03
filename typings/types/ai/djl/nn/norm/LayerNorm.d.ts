import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { LayerNorm$Builder } from '../../../../ai/djl/nn/norm/LayerNorm$Builder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LayerNorm extends AbstractBlock {
    static builder(): LayerNorm$Builder;
    static layerNorm(paramarg0: NDArray, paramarg1: Shape, paramarg2: NDArray, paramarg3: NDArray, paramarg4: number): (Object | null)[];
    constructor(arg0: LayerNorm$Builder)
    // private axis: number[];
    // private beta: Parameter;
    // private center: boolean;
    // private epsilon: number;
    // private gamma: Parameter;
    // private normalizedShape: Shape;
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