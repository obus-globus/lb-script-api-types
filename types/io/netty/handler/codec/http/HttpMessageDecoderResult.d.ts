import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class HttpMessageDecoderResult extends DecoderResult {
    static SUCCESS: DecoderResult;
    static UNFINISHED: DecoderResult;
    static failure(paramarg0: Throwable): DecoderResult;
    constructor(arg0: number, arg1: number)
    // private headerSize: number;
    // private initialLineLength: number;
    headerSize(): number;
    initialLineLength(): number;
    totalSize(): number;
}