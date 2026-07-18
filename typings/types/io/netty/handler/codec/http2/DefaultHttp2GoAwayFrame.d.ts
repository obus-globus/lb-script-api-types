import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultByteBufHolder } from '../../../../../io/netty/buffer/DefaultByteBufHolder.d.ts'
import type { Http2Error } from '../../../../../io/netty/handler/codec/http2/Http2Error.d.ts'
import type { Http2GoAwayFrame } from '../../../../../io/netty/handler/codec/http2/Http2GoAwayFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2GoAwayFrame extends DefaultByteBufHolder implements Http2GoAwayFrame {
    constructor(arg0: Http2Error)
    constructor(arg0: Http2Error, arg1: ByteBuf)
    constructor(arg0: number, arg1: number, arg2: ByteBuf)
    constructor(arg0: number)
    constructor(arg0: number, arg1: ByteBuf)
    // private errorCode: number;
    // private extraStreamIds: number;
    // private lastStreamId: number;
    copy(): Http2GoAwayFrame;
    duplicate(): Http2GoAwayFrame;
    equals(arg0: Object | null): boolean;
    errorCode(): number;
    extraStreamIds(): number;
    hashCode(): number;
    lastStreamId(): number;
    name(): string;
    replace(arg0: ByteBuf): Http2GoAwayFrame;
    retain(): Http2GoAwayFrame;
    retain(arg0: number): Http2GoAwayFrame;
    retainedDuplicate(): Http2GoAwayFrame;
    setExtraStreamIds(arg0: number): Http2GoAwayFrame;
    toString(): string;
    touch(): Http2GoAwayFrame;
    touch(arg0: Object): Http2GoAwayFrame;
}