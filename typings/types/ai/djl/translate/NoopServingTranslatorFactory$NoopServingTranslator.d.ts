import type { Input } from '../../../ai/djl/modality/Input.d.ts'
import type { Output } from '../../../ai/djl/modality/Output.d.ts'
import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDManager } from '../../../ai/djl/ndarray/NDManager.d.ts'
import type { Batchifier } from '../../../ai/djl/translate/Batchifier.d.ts'
import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class NoopServingTranslatorFactory$NoopServingTranslator extends Object implements Translator<Input, Output> {
    constructor(arg0: Batchifier)
    readonly batchifier: Batchifier;
    // private csvTranslator: Translator<string, string>;
    batchProcessInput(arg0: TranslatorContext, arg1: Input[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Output[];
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
    processInput(arg0: TranslatorContext, arg1: Input): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Output;
    // private toList(arg0: NDArray): Object[];
    // private toList(arg0: Iterator<Number>, arg1: number[], arg2: number): Object[];
    // private toNDList(arg0: NDManager, arg1: JsonElement): (Object | null)[];
}