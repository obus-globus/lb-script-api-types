import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../java/io/DataInputStream.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ParallelBlock extends AbstractBlock {
    constructor(arg0: (param0: (Object | null)[][]) => (Object | null)[])
    constructor(arg0: (param0: (Object | null)[][]) => (Object | null)[], arg1: Block[])
    // private function: (param0: (Object | null)[][]) => (Object | null)[];
    add(arg0: Block): ParallelBlock;
    add(arg0: (param0: (Object | null)[]) => (Object | null)[]): ParallelBlock;
    add(arg0: (param0: (Object | null)[]) => (Object | null)[], arg1: string): ParallelBlock;
    addAll(arg0: Block[]): ParallelBlock;
    addAll(arg0: E[]): ParallelBlock;
    addSingleton(arg0: (param0: NDArray) => NDArray): ParallelBlock;
    addSingleton(arg0: (param0: NDArray) => NDArray, arg1: string): ParallelBlock;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<K, V>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    initializeChildBlocks(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
    loadMetadata(arg0: number, arg1: DataInputStream): void;
}