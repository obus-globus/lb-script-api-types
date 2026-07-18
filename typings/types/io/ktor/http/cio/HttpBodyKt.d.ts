import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { HttpProtocolVersion } from '../../../../io/ktor/http/HttpProtocolVersion.d.ts'
import type { ConnectionOptions } from '../../../../io/ktor/http/cio/ConnectionOptions.d.ts'
import type { HttpHeadersMap } from '../../../../io/ktor/http/cio/HttpHeadersMap.d.ts'
import type { Request } from '../../../../io/ktor/http/cio/Request.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class HttpBodyKt extends Object {
    static expectHttpBody(method: HttpMethod, contentLength: number, transferEncoding: CharSequence | null, connectionOptions: ConnectionOptions | null, contentType: CharSequence | null): boolean;
    static expectHttpBody(request: Request): boolean;
    static expectHttpUpgrade(method: HttpMethod, upgrade: CharSequence | null, connectionOptions: ConnectionOptions | null): boolean;
    static expectHttpUpgrade(request: Request): boolean;
    static parseHttpBody(version: HttpProtocolVersion | null, contentLength: number, transferEncoding: CharSequence | null, connectionOptions: ConnectionOptions | null, input: ByteReadChannel, out: ByteWriteChannel): void;
    static parseHttpBody(headers: HttpHeadersMap, input: ByteReadChannel, out: ByteWriteChannel): void;
    static parseHttpBody(contentLength: number, transferEncoding: CharSequence | null, connectionOptions: ConnectionOptions | null, input: ByteReadChannel, out: ByteWriteChannel): void;
}