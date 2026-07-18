import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { CompressionConfig$Mode } from '../../../../../io/ktor/server/plugins/compression/CompressionConfig$Mode.d.ts'
import type { CompressionEncoderBuilder } from '../../../../../io/ktor/server/plugins/compression/CompressionEncoderBuilder.d.ts'
import type { CompressionOptions } from '../../../../../io/ktor/server/plugins/compression/CompressionOptions.d.ts'
import type { ConditionsHolderBuilder } from '../../../../../io/ktor/server/plugins/compression/ConditionsHolderBuilder.d.ts'
import type { ContentEncoder } from '../../../../../io/ktor/util/ContentEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompressionConfig extends Object implements ConditionsHolderBuilder {
    constructor()
    readonly conditions: (param0: ApplicationCall, param1: OutgoingContent) => boolean[];
    readonly encoders: JavaMap<string, CompressionEncoderBuilder>;
    maxDecodedContentLength: number;
    maxEncodingChainLength: number;
    mode: CompressionConfig$Mode;
    buildOptions(): CompressionOptions;
    default(): void;
    encoder(encoder: ContentEncoder, block: (param0: CompressionEncoderBuilder) => void): void;
}