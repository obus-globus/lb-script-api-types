import type { Socks4CommandType } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandType.d.ts'
import type { Socks4Message } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks4CommandRequest extends Socks4Message, Object{
    dstAddr(): string;
    dstPort(): number;
    type(): Socks4CommandType;
    userId(): string;
}