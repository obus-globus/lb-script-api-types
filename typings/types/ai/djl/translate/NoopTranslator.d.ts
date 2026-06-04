import type { Batchifier } from '../../../ai/djl/translate/Batchifier.d.ts'
import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NoopTranslator extends Object implements Translator<(Object | null)[], (Object | null)[]> {
    constructor()
    constructor(arg0: Batchifier)
    readonly batchifier: Batchifier;
    batchProcessInput(arg0: TranslatorContext, arg1: I[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O[];
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: (Object | null)[]): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): (Object | null)[];
    setBatchifier(arg0: Batchifier): void;
}