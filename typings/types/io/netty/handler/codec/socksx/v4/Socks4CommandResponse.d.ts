import type { DecoderResult } from '../../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { SocksVersion } from '../../../../../../io/netty/handler/codec/socksx/SocksVersion.d.ts'
import type { Socks4CommandStatus } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4CommandStatus.d.ts'
import type { Socks4Message } from '../../../../../../io/netty/handler/codec/socksx/v4/Socks4Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks4CommandResponse extends Socks4Message, Object{
    decoderResult(): DecoderResult;
    dstAddr(): string;
    dstPort(): number;
    setDecoderResult(arg0: DecoderResult): void;
    status(): Socks4CommandStatus;
    version(): SocksVersion;
}