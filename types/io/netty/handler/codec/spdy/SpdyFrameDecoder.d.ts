import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { SpdyFrameDecoder$State } from '../../../../../io/netty/handler/codec/spdy/SpdyFrameDecoder$State.d.ts'
import type { SpdyFrameDecoderDelegate } from '../../../../../io/netty/handler/codec/spdy/SpdyFrameDecoderDelegate.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpdyFrameDecoder extends Object {
    constructor(arg0: SpdyVersion, arg1: SpdyFrameDecoderDelegate)
    constructor(arg0: SpdyVersion, arg1: SpdyFrameDecoderDelegate, arg2: number)
    // private delegate: SpdyFrameDecoderDelegate;
    // private flags: number;
    // private frameType: number;
    // private length: number;
    // private maxChunkSize: number;
    // private numSettings: number;
    // private spdyVersion: number;
    // private state: SpdyFrameDecoder$State;
    // private streamId: number;
    decode(arg0: ByteBuf): void;
    decodeUnknownFrame(arg0: number, arg1: number, arg2: number, arg3: ByteBuf): boolean;
    isValidUnknownFrameHeader(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
}