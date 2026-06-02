import type { DecoderResultProvider } from '../../../../../io/netty/handler/codec/DecoderResultProvider.d.ts'
import type { SocksVersion } from '../../../../../io/netty/handler/codec/socksx/SocksVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SocksMessage extends DecoderResultProvider, Object{
    version(): SocksVersion;
}