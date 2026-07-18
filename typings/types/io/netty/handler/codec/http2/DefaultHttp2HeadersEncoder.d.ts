import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HpackEncoder } from '../../../../../io/netty/handler/codec/http2/HpackEncoder.d.ts'
import type { Http2HeadersEncoder } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder.d.ts'
import type { Http2HeadersEncoder$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$Configuration.d.ts'
import type { Http2HeadersEncoder$SensitivityDetector } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$SensitivityDetector.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2HeadersEncoder extends Object implements Http2HeadersEncoder, Http2HeadersEncoder$Configuration, Closeable {
    static ALWAYS_SENSITIVE: Http2HeadersEncoder$SensitivityDetector;
    static NEVER_SENSITIVE: Http2HeadersEncoder$SensitivityDetector;
    constructor()
    constructor(arg0: Http2HeadersEncoder$SensitivityDetector)
    constructor(arg0: Http2HeadersEncoder$SensitivityDetector, arg1: HpackEncoder)
    constructor(arg0: Http2HeadersEncoder$SensitivityDetector, arg1: boolean)
    constructor(arg0: Http2HeadersEncoder$SensitivityDetector, arg1: boolean, arg2: number)
    constructor(arg0: Http2HeadersEncoder$SensitivityDetector, arg1: boolean, arg2: number, arg3: number)
    // private hpackEncoder: HpackEncoder;
    // private sensitivityDetector: Http2HeadersEncoder$SensitivityDetector;
    // private tableSizeChangeOutput: ByteBuf;
    close(): void;
    configuration(): Http2HeadersEncoder$Configuration;
    encodeHeaders(arg0: number, arg1: (Object | null)[], arg2: ByteBuf): void;
    maxHeaderListSize(): number;
    maxHeaderListSize(arg0: number): void;
    maxHeaderTableSize(): number;
    maxHeaderTableSize(arg0: number): void;
}