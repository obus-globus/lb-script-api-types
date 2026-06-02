import type { StreamingTranslator } from '../../../ai/djl/inference/streaming/StreamingTranslator.d.ts'
import type { StreamingTranslator$StreamOutput } from '../../../ai/djl/inference/streaming/StreamingTranslator$StreamOutput.d.ts'
import type { StreamingTranslator$Support } from '../../../ai/djl/inference/streaming/StreamingTranslator$Support.d.ts'
import type { Input } from '../../../ai/djl/modality/Input.d.ts'
import type { Output } from '../../../ai/djl/modality/Output.d.ts'
import type { TranslatorContext } from '../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ServingTranslator extends StreamingTranslator<Input, Output>, Object{
    getSupport(): StreamingTranslator$Support;
    processStreamOutput(arg0: TranslatorContext, arg1: Stream<(Object | null)[]>): StreamingTranslator$StreamOutput<Output>;
    setArguments(arg0: { [key: string]: Object | null }): void;
    supportsAsync(): boolean;
    supportsIterative(): boolean;
}