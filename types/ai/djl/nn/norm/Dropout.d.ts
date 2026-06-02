import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Dropout$Builder } from '../../../../ai/djl/nn/norm/Dropout$Builder.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Dropout extends AbstractBlock {
    static builder(): Dropout$Builder;
    static dropout(paramarg0: NDArray): (Object | null)[];
    static dropout(paramarg0: NDArray, paramarg1: number): (Object | null)[];
    static dropout(paramarg0: NDArray, paramarg1: number, paramarg2: boolean): (Object | null)[];
    constructor(arg0: Dropout$Builder)
    // private rate: number;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    loadMetadata(arg0: number, arg1: DataInputStream): void;
}