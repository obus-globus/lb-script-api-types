import type { HpackDecoder$HeaderType } from '../../../../../io/netty/handler/codec/http2/HpackDecoder$HeaderType.d.ts'
import type { Http2Exception } from '../../../../../io/netty/handler/codec/http2/Http2Exception.d.ts'
import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HpackDecoder$Http2HeadersSink extends Object {
    constructor(arg0: number, arg1: (Object | null)[], arg2: number, arg3: boolean)
    // private exceededMaxLength: boolean;
    // private headers: (Object | null)[];
    // private headersLength: number;
    // private maxHeaderListSize: number;
    // private previousType: HpackDecoder$HeaderType;
    // private streamId: number;
    // private validateHeaders: boolean;
    // private validationException: Http2Exception;
    appendToHeaderList(arg0: AsciiString, arg1: AsciiString): void;
    finish(): void;
}