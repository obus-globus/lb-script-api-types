import type { Batchifier } from '../../../ai/djl/translate/Batchifier.d.ts'
import type { PostProcessor } from '../../../ai/djl/translate/PostProcessor.d.ts'
import type { PreProcessor } from '../../../ai/djl/translate/PreProcessor.d.ts'
import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Translator<I extends Object | number | string | boolean, O extends Object | number | string | boolean> extends PostProcessor<O>, PreProcessor<I>, Object{
    batchProcessInput(arg0: TranslatorContext, arg1: I[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O[];
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
}