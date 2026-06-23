import type { Batchifier } from '../../../ai/djl/translate/Batchifier.d.ts'
import type { PostProcessor } from '../../../ai/djl/translate/PostProcessor.d.ts'
import type { PreProcessor } from '../../../ai/djl/translate/PreProcessor.d.ts'
import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class BasicTranslator<I extends unknown, O extends unknown> extends Object implements Translator<I, O> {
    constructor(arg0: PreProcessor<I>, arg1: PostProcessor<O>)
    constructor(arg0: PreProcessor<I>, arg1: PostProcessor<O>, arg2: Batchifier)
    readonly batchifier: Batchifier;
    // private postProcessor: PostProcessor<O>;
    // private preProcessor: PreProcessor<I>;
    batchProcessInput(arg0: TranslatorContext, arg1: I[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O[];
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: I): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O;
}