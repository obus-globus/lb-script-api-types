import type { NDManager } from '../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Block } from '../../../../ai/djl/nn/Block.d.ts'
import type { ParameterStore } from '../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Decoder extends AbstractBlock {
    constructor(arg0: number, arg1: Block)
    // private block: Block;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    initializeChildBlocks(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
    loadParameters(arg0: NDManager, arg1: DataInputStream): void;
    saveParameters(arg0: DataOutputStream): void;
}