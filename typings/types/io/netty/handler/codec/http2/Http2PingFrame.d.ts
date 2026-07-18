import type { Http2Frame } from '../../../../../io/netty/handler/codec/http2/Http2Frame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2PingFrame extends Http2Frame, Object{
    ack(): boolean;
    content(): number;
    name(): string;
}