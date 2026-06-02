import type { Socks5AddressType } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AddressType.d.ts'
import type { Socks5CommandStatus } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5CommandStatus.d.ts'
import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5CommandResponse extends Socks5Message, Object{
    bndAddr(): string;
    bndAddrType(): Socks5AddressType;
    bndPort(): number;
    status(): Socks5CommandStatus;
}