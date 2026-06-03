import type { TextEmbedding } from '../../../../../ai/djl/modality/nlp/embedding/TextEmbedding.d.ts'
import type { WordEmbedding } from '../../../../../ai/djl/modality/nlp/embedding/WordEmbedding.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SimpleTextEmbedding extends Object implements TextEmbedding {
    constructor(arg0: WordEmbedding)
    // private wordEmbedding: WordEmbedding;
    embedText(arg0: NDArray): NDArray;
    embedText(arg0: NDManager, arg1: number[]): NDArray;
    embedText(arg0: NDManager, arg1: string[]): NDArray;
    embedText(arg0: NDManager, arg1: number[]): NDArray;
    embedText(arg0: NDManager, arg1: string[]): NDArray;
    preprocessTextToEmbed(arg0: string[]): number[];
    unembedText(arg0: NDArray): string[];
}