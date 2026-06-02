import type { Vocabulary } from '../../../../../ai/djl/modality/nlp/Vocabulary.d.ts'
import type { TrainableWordEmbedding$Builder } from '../../../../../ai/djl/modality/nlp/embedding/TrainableWordEmbedding$Builder.d.ts'
import type { WordEmbedding } from '../../../../../ai/djl/modality/nlp/embedding/WordEmbedding.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { SparseFormat } from '../../../../../ai/djl/ndarray/types/SparseFormat.d.ts'
import type { Embedding } from '../../../../../ai/djl/nn/core/Embedding.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TrainableWordEmbedding extends Embedding<string> implements WordEmbedding {
    static builder(): TrainableWordEmbedding$Builder;
    static embedding(paramarg0: NDArray, paramarg1: NDArray, paramarg2: SparseFormat): (Object | null)[];
    static fromPretrained(paramarg0: NDArray, paramarg1: string[]): TrainableWordEmbedding;
    static fromPretrained(paramarg0: NDArray, paramarg1: string[], paramarg2: SparseFormat): TrainableWordEmbedding;
    constructor(arg0: Vocabulary, arg1: number)
    constructor(arg0: TrainableWordEmbedding$Builder)
    private constructor(arg0: NDArray, arg1: string[])
    private constructor(arg0: NDArray, arg1: string[], arg2: SparseFormat)
    // private vocabulary: Vocabulary;
    decode(arg0: number[]): string;
    embed(arg0: string): number;
    embedWord(arg0: NDArray): NDArray;
    embedWord(arg0: NDManager, arg1: number): NDArray;
    embedWord(arg0: NDManager, arg1: string): NDArray;
    encode(arg0: string): number[];
    hasItem(arg0: string): boolean;
    preprocessWordToEmbed(arg0: string): number;
    unembed(arg0: number): Optional<string>;
    unembedWord(arg0: NDArray): string;
    vocabularyContains(arg0: string): boolean;
}