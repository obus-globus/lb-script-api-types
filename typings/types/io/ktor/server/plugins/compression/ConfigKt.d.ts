import type { ContentType } from '../../../../../io/ktor/http/ContentType.d.ts'
import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ApplicationCall } from '../../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { CompressionConfig } from '../../../../../io/ktor/server/plugins/compression/CompressionConfig.d.ts'
import type { CompressionEncoderBuilder } from '../../../../../io/ktor/server/plugins/compression/CompressionEncoderBuilder.d.ts'
import type { ConditionsHolderBuilder } from '../../../../../io/ktor/server/plugins/compression/ConditionsHolderBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ConfigKt extends Object {
    static condition(self: ConditionsHolderBuilder, predicate: (param0: ApplicationCall, param1: OutgoingContent) => boolean): void;
    static deflate(self: CompressionConfig, block: (param0: CompressionEncoderBuilder) => void): void;
    static excludeContentType(self: ConditionsHolderBuilder, ...mimeTypes: ContentType[]): void;
    static gzip(self: CompressionConfig, block: (param0: CompressionEncoderBuilder) => void): void;
    static identity(self: CompressionConfig, block: (param0: CompressionEncoderBuilder) => void): void;
    static matchContentType(self: ConditionsHolderBuilder, ...mimeTypes: ContentType[]): void;
    static minimumSize(self: ConditionsHolderBuilder, minSize: number): void;
}