import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ApplicationReceivePipeline } from '../../../../io/ktor/server/request/ApplicationReceivePipeline.d.ts'
import type { ApplicationSendPipeline } from '../../../../io/ktor/server/response/ApplicationSendPipeline.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class DefaultTransformKt extends Object {
    static getLOGGER(): Logger;
    static installDefaultTransformations(self: ApplicationReceivePipeline): void;
    static installDefaultTransformations(self: ApplicationSendPipeline): void;
    static readText(self: ByteReadChannel, charset: Charset): string;
    static withContentType<R extends unknown>(call: PipelineCall, block: () => R): R;
}