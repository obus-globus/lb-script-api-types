import type { Socks4CommandStatus } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandStatus.d.ts'
import type { Socks4Message } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks4CommandResponse extends Socks4Message, Object{
    dstAddr(): string;
    dstPort(): number;
    status(): Socks4CommandStatus;
}