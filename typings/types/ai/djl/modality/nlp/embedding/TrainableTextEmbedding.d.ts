import type { TextEmbedding } from '../../../../../ai/djl/modality/nlp/embedding/TextEmbedding.d.ts'
import type { TrainableWordEmbedding } from '../../../../../ai/djl/modality/nlp/embedding/TrainableWordEmbedding.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { DataType } from '../../../../../ai/djl/ndarray/types/DataType.d.ts'
import type { Shape } from '../../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { AbstractBlock } from '../../../../../ai/djl/nn/AbstractBlock.d.ts'
import type { ParameterStore } from '../../../../../ai/djl/training/ParameterStore.d.ts'
import type { Pair } from '../../../../../ai/djl/util/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TrainableTextEmbedding extends AbstractBlock implements TextEmbedding {
    constructor(arg0: TrainableWordEmbedding)
    // private trainableWordEmbedding: TrainableWordEmbedding;
    embedText(arg0: NDManager, arg1: number[]): NDArray;
    embedText(arg0: NDManager, arg1: string[]): NDArray;
    embedText(arg0: NDArray): NDArray;
    embedText(arg0: NDManager, arg1: number[]): NDArray;
    embedText(arg0: NDManager, arg1: string[]): NDArray;
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: (Object | null)[], arg3: Pair<K, V>[]): (Object | null)[];
    forwardInternal(arg0: ParameterStore, arg1: (Object | null)[], arg2: boolean, arg3: Pair<K, V>[]): (Object | null)[];
    getOutputShapes(arg0: Shape[]): Shape[];
    getOutputShapes(arg0: Shape[], arg1: DataType[]): Shape[];
    initializeChildBlocks(arg0: NDManager, arg1: DataType, arg2: Shape[]): void;
    preprocessTextToEmbed(arg0: string[]): number[];
    unembedText(arg0: NDArray): string[];
}