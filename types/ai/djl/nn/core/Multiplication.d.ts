import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Parameter } from '../../../../ai/djl/nn/Parameter.d.ts'
import type { Multiplication$Builder } from '../../../../ai/djl/nn/core/Multiplication$Builder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multiplication extends AbstractBlock {
    static builder(): Multiplication$Builder;
    constructor(arg0: Multiplication$Builder)
    // private inputFeatures: number;
    // private inputShape: Shape;
    // private units: number;
    // private weight: Parameter;
    beforeInitialize(arg0: Shape[]): void;
    describeInput(): Pair<K, V>[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    loadMetadata(arg0: number, arg1: DataInputStream): void;
    multiply(arg0: NDArray, arg1: NDArray): (Object | null)[];
    prepare(arg0: Shape[]): void;
    saveMetadata(arg0: DataOutputStream): void;
}