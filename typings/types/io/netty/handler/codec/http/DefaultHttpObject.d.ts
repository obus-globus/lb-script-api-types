import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttpObject extends Object implements HttpObject {
    constructor()
    readonly decoderResult: DecoderResult;
    decoderResult(): DecoderResult;
    equals(arg0: Object | null): boolean;
    getDecoderResult(): DecoderResult;
    hashCode(): number;
    setDecoderResult(arg0: DecoderResult): void;
}