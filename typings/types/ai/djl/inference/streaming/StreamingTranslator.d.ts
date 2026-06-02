import type { StreamingTranslator$StreamOutput } from '../../../../ai/djl/inference/streaming/StreamingTranslator$StreamOutput.d.ts'
import type { StreamingTranslator$Support } from '../../../../ai/djl/inference/streaming/StreamingTranslator$Support.d.ts'
import type { Batchifier } from '../../../../ai/djl/translate/Batchifier.d.ts'
import type { Translator } from '../../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorContext } from '../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StreamingTranslator<I extends Object | number | string | boolean, O extends Object | number | string | boolean> extends Translator<I, O>, Object{
    batchProcessInput(arg0: TranslatorContext, arg1: I[]): (Object | null)[];
    batchProcessOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O[];
    getBatchifier(): Batchifier;
    getExpansions(): TranslatorOptions;
    getSupport(): StreamingTranslator$Support;
    prepare(arg0: TranslatorContext): void;
    processStreamOutput(arg0: TranslatorContext, arg1: Stream<(Object | null)[]>): StreamingTranslator$StreamOutput<O>;
    supportsAsync(): boolean;
    supportsIterative(): boolean;
}