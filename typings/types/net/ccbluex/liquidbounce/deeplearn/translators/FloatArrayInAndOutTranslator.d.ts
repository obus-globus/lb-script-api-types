import type { Batchifier } from '../../../../../ai/djl/translate/Batchifier.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatArrayInAndOutTranslator extends Object implements Translator<number[], number[]> {
    static INSTANCE: FloatArrayInAndOutTranslator;
    batchProcessInput(arg0: TranslatorContext, arg1: number[][]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): number[][];
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
    processInput(ctx: TranslatorContext, input: number[]): (Object | null)[];
    processOutput(ctx: TranslatorContext, list: (Object | null)[]): number[];
}