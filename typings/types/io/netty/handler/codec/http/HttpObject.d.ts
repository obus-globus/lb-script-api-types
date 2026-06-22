import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { DecoderResultProvider } from '../../../../../io/netty/handler/codec/DecoderResultProvider.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HttpObject extends DecoderResultProvider, Object{
    decoderResult(): DecoderResult;
    getDecoderResult(): DecoderResult;
    setDecoderResult(arg0: DecoderResult): void;
}