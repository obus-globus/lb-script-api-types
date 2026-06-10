import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TranscodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler.d.ts'
import type { TranscodingErrorHandler$ReplacementString } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler$ReplacementString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Encodings$BuiltinTranscodingErrorHandler extends Object implements TranscodingErrorHandler {
    static DEFAULT: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => TranscodingErrorHandler$ReplacementString;
    static DEFAULT_KEEP_SURROGATES_IN_UTF8: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => TranscodingErrorHandler$ReplacementString;
    constructor()
    apply(sourceString: AbstractTruffleString, byteIndex: number, estimatedByteLength: number, sourceEncoding: TruffleString$Encoding, targetEncoding: TruffleString$Encoding): TranscodingErrorHandler$ReplacementString;
}