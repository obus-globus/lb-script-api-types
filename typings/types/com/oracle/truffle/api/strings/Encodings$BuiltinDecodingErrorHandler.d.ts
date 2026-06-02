import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { DecodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler.d.ts'
import type { DecodingErrorHandler$Result } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler$Result.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Encodings$BuiltinDecodingErrorHandler extends Object implements DecodingErrorHandler {
    static DEFAULT: (param0: AbstractTruffleString, param1: number, param2: number) => com.oracle.truffle.api.strings.DecodingErrorHandler.Result;
    static DEFAULT_KEEP_SURROGATES_IN_UTF8: (param0: AbstractTruffleString, param1: number, param2: number) => com.oracle.truffle.api.strings.DecodingErrorHandler.Result;
    static DEFAULT_UTF8_INCOMPLETE_SEQUENCES: (param0: AbstractTruffleString, param1: number, param2: number) => com.oracle.truffle.api.strings.DecodingErrorHandler.Result;
    static RETURN_NEGATIVE: (param0: AbstractTruffleString, param1: number, param2: number) => com.oracle.truffle.api.strings.DecodingErrorHandler.Result;
    static RETURN_NEGATIVE_UTF8_INCOMPLETE_SEQUENCES: (param0: AbstractTruffleString, param1: number, param2: number) => com.oracle.truffle.api.strings.DecodingErrorHandler.Result;
    constructor()
    apply(string: AbstractTruffleString, bytePosition: number, estimatedByteLength: number): DecodingErrorHandler$Result;
}