import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TextEmbedding extends Object{
    embedText(arg0: NDArray): NDArray;
    embedText(arg0: NDManager, arg1: number[]): NDArray;
    embedText(arg0: NDManager, arg1: string[]): NDArray;
    preprocessTextToEmbed(arg0: string[]): number[];
    unembedText(arg0: NDArray): string[];
}