import type { Model } from '../../../../../ai/djl/Model.d.ts'
import type { Predictor } from '../../../../../ai/djl/inference/Predictor.d.ts'
import type { TextEmbedding } from '../../../../../ai/djl/modality/nlp/embedding/TextEmbedding.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Embedding } from '../../../../../ai/djl/nn/core/Embedding.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ModelZooTextEmbedding extends Object implements TextEmbedding, AutoCloseable {
    constructor(arg0: Model)
    // private embedding: Embedding<string>;
    // private predictor: Predictor<(Object | null)[], (Object | null)[]>;
    close(): void;
    embedText(arg0: NDArray): NDArray;
    embedText(arg0: NDManager, arg1: number[]): NDArray;
    embedText(arg0: NDManager, arg1: string[]): NDArray;
    preprocessTextToEmbed(arg0: string[]): number[];
    unembedText(arg0: NDArray): string[];
}