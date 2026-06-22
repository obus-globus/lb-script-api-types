import type { DecoderResult } from '../../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { SocksVersion } from '../../../../../../io/netty/handler/codec/socksx/SocksVersion.d.ts'
import type { Socks5AuthMethod } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5AuthMethod.d.ts'
import type { Socks5Message } from '../../../../../../io/netty/handler/codec/socksx/v5/Socks5Message.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5InitialResponse extends Socks5Message, Object{
    authMethod(): Socks5AuthMethod;
    decoderResult(): DecoderResult;
    setDecoderResult(arg0: DecoderResult): void;
    version(): SocksVersion;
}