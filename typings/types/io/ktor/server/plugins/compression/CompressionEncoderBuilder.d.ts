import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { CompressionEncoderConfig } from '../../../../../io/ktor/server/plugins/compression/CompressionEncoderConfig.d.ts'
import type { ConditionsHolderBuilder } from '../../../../../io/ktor/server/plugins/compression/ConditionsHolderBuilder.d.ts'
import type { ContentEncoder } from '../../../../../io/ktor/util/ContentEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CompressionEncoderBuilder extends Object implements ConditionsHolderBuilder {
    constructor(encoder: ContentEncoder)
    readonly conditions: (param0: ApplicationCall, param1: OutgoingContent) => boolean[];
    readonly encoder: ContentEncoder;
    priority: number;
    buildConfig(): CompressionEncoderConfig;
}