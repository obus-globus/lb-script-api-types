import type { DecoderResult } from '../../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { SocksMessage } from '../../../../../../io/netty/handler/codec/socksx/SocksMessage.d.ts'
import type { SocksVersion } from '../../../../../../io/netty/handler/codec/socksx/SocksVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Socks5Message extends SocksMessage, Object{
    decoderResult(): DecoderResult;
    setDecoderResult(arg0: DecoderResult): void;
    version(): SocksVersion;
}