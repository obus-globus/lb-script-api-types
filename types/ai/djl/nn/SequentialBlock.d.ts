import type { StreamingBlock } from '../../../ai/djl/inference/streaming/StreamingBlock.d.ts'
import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../ai/djl/nn/AbstractBlock.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { ParameterStore } from '../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../java/io/DataOutputStream.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class SequentialBlock extends AbstractBlock implements StreamingBlock {
    constructor()
    readonly returnIntermediate: boolean;
    add(arg0: Block): SequentialBlock;
    add(arg0: (param0: (Object | null)[]) => (Object | null)[]): SequentialBlock;
    add(arg0: (param0: (Object | null)[]) => (Object | null)[], arg1: string): SequentialBlock;
    addAll(arg0: Block[]): SequentialBlock;
    addAll(arg0: E[]): SequentialBlock;
    addSingleton(arg0: (param0: NDArray) => NDArray): SequentialBlock;
    addSingleton(arg0: (param0: NDArray) => NDArray, arg1: string): SequentialBlock;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<K, V>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    forwardStream(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean): Stream<(Object | null)[]>;
    forwardStream(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): Stream<(Object | null)[]>;
    forwardStreamIter(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): Iterator<(Object | null)[]>;
    getOutputShapes(arg0: Shape[]): Shape[];
    initializeChildBlocks(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
    isReturnIntermediate(): boolean;
    loadMetadata(arg0: number, arg1: DataInputStream): void;
    removeLastBlock(): void;
    replaceLastBlock(arg0: Block): void;
    saveMetadata(arg0: DataOutputStream): void;
    setReturnIntermediate(arg0: boolean): SequentialBlock;
}