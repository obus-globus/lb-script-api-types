import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WordEmbedding extends Object{
    embedWord(arg0: NDArray): NDArray;
    embedWord(arg0: NDManager, arg1: number): NDArray;
    embedWord(arg0: NDManager, arg1: string): NDArray;
    preprocessWordToEmbed(arg0: string): number;
    unembedWord(arg0: NDArray): string;
    vocabularyContains(arg0: string): boolean;
}