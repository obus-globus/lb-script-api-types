import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { SocksMessage } from '../../../../../io/netty/handler/codec/socksx/SocksMessage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractSocksMessage extends Object implements SocksMessage {
    constructor()
    readonly decoderResult: DecoderResult;
    decoderResult(): DecoderResult;
    setDecoderResult(arg0: DecoderResult): void;
}