import type { DecoderResult } from '../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DecoderResultProvider extends Object{
    decoderResult(): DecoderResult;
    setDecoderResult(arg0: DecoderResult): void;
}