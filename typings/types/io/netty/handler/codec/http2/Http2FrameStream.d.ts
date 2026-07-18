import type { Http2Stream$State } from '../../../../../io/netty/handler/codec/http2/Http2Stream$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2FrameStream extends Object{
    id(): number;
    state(): Http2Stream$State;
}