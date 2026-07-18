import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2FrameStreamEvent } from '../../../../../io/netty/handler/codec/http2/Http2FrameStreamEvent.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Http2Stream$State } from '../../../../../io/netty/handler/codec/http2/Http2Stream$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2FrameCodec$DefaultHttp2FrameStream extends Object implements Http2FrameStream {
    constructor()
    // private attachment: Channel;
    // private id: number;
    // private stateChanged: Http2FrameStreamEvent;
    // private stream: Http2Stream;
    // private writabilityChanged: Http2FrameStreamEvent;
    id(): number;
    setStreamAndProperty(arg0: Http2Connection$PropertyKey, arg1: Http2Stream): Http2FrameCodec$DefaultHttp2FrameStream;
    state(): Http2Stream$State;
    toString(): string;
}