import type { TrainableTextEmbedding } from '../../../../../ai/djl/modality/nlp/embedding/TrainableTextEmbedding.d.ts'
import type { SimpleTokenizer } from '../../../../../ai/djl/modality/nlp/preprocess/SimpleTokenizer.d.ts'
import type { TextProcessor } from '../../../../../ai/djl/modality/nlp/preprocess/TextProcessor.d.ts'
import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../../../ai/djl/ndarray/NDManager.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SimpleText2TextTranslator extends Object implements Translator<string, string> {
    constructor()
    // private sourceEmbedding: TrainableTextEmbedding;
    // private targetEmbedding: TrainableTextEmbedding;
    // private textProcessors: TextProcessor[];
    // private tokenizer: SimpleTokenizer;
    batchProcessInput(arg0: TranslatorContext, arg1: string[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): string[];
    // private get(arg0: NDManager): NDArray;
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: string): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): string;
}