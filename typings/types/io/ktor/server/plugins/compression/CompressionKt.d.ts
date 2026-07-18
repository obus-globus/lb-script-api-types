import type { RouteScopedPlugin } from '../../../../../io/ktor/server/application/RouteScopedPlugin.d.ts'
import type { CompressionConfig } from '../../../../../io/ktor/server/plugins/compression/CompressionConfig.d.ts'
import type { ApplicationRequest } from '../../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { AttributeKey } from '../../../../../io/ktor/util/AttributeKey.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Logger } from '../../../../../org/slf4j/Logger.d.ts'
export class CompressionKt extends Object {
    static DEFAULT_MAX_DECODED_CONTENT_LENGTH: number;
    static DEFAULT_MAX_ENCODING_CHAIN_LENGTH: number;
    static DEFAULT_MINIMAL_COMPRESSION_SIZE: number;
    static getAppliedDecoders(paramarg0: ApplicationRequest): string[];
    static getCompression(): RouteScopedPlugin<CompressionConfig>;
    static getDecompressionListAttribute(): AttributeKey<string[]>;
    static getLOGGER(): Logger;
    static limitDecodedSize(self: ByteReadChannel, limit: number, coroutineContext: CoroutineContext): ByteReadChannel;
}