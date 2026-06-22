import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { DecoderResultProvider } from '../../../../../io/netty/handler/codec/DecoderResultProvider.d.ts'
import type { SocksVersion } from '../../../../../io/netty/handler/codec/socksx/SocksVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SocksMessage extends DecoderResultProvider, Object{
    decoderResult(): DecoderResult;
    setDecoderResult(arg0: DecoderResult): void;
    version(): SocksVersion;
}