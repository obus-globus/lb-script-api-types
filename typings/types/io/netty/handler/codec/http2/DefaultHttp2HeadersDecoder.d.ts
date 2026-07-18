import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HpackDecoder } from '../../../../../io/netty/handler/codec/http2/HpackDecoder.d.ts'
import type { Http2HeadersDecoder } from '../../../../../io/netty/handler/codec/http2/Http2HeadersDecoder.d.ts'
import type { Http2HeadersDecoder$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2HeadersDecoder$Configuration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2HeadersDecoder extends Object implements Http2HeadersDecoder, Http2HeadersDecoder$Configuration {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: boolean)
    constructor(arg0: boolean, arg1: boolean, arg2: HpackDecoder)
    constructor(arg0: boolean, arg1: boolean, arg2: number)
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: boolean, arg1: number, arg2: number)
    // private headerArraySizeAccumulator: number;
    // private hpackDecoder: HpackDecoder;
    // private maxHeaderListSizeGoAway: number;
    // private validateHeaderValues: boolean;
    // private validateHeaders: boolean;
    configuration(): Http2HeadersDecoder$Configuration;
    decodeHeaders(arg0: number, arg1: ByteBuf): (Object | null)[];
    maxHeaderListSize(): number;
    maxHeaderListSize(arg0: number, arg1: number): void;
    maxHeaderListSizeGoAway(): number;
    maxHeaderTableSize(): number;
    maxHeaderTableSize(arg0: number): void;
    newHeaders(): (Object | null)[];
    numberOfHeadersGuess(): number;
    validateHeaderValues(): boolean;
    validateHeaders(): boolean;
}