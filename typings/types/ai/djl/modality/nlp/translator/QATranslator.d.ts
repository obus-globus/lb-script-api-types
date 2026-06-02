import type { QAInput } from '../../../../../ai/djl/modality/nlp/qa/QAInput.d.ts'
import type { QATranslator$BaseBuilder } from '../../../../../ai/djl/modality/nlp/translator/QATranslator$BaseBuilder.d.ts'
import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class QATranslator extends Object implements Translator<QAInput, string> {
    constructor(arg0: QATranslator$BaseBuilder<Object>)
    batchifier: Batchifier;
    // private includeTokenTypes: boolean;
    // private locale: Locale;
    // private maxLabels: number;
    // private maxLength: number;
    // private padding: boolean;
    // private toLowerCase: boolean;
    // private tokenizerName: string;
    // private truncation: boolean;
    // private vocab: string;
    batchProcessInput(arg0: TranslatorContext, arg1: I[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O[];
    getBatchifier(): Batchifier;
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
}