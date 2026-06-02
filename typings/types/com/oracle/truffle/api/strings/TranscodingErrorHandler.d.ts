import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TranscodingErrorHandler$ReplacementString } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler$ReplacementString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TranscodingErrorHandler extends Object{
    apply(sourceString: AbstractTruffleString, byteIndex: number, estimatedByteLength: number, sourceEncoding: TruffleString$Encoding, targetEncoding: TruffleString$Encoding): TranscodingErrorHandler$ReplacementString;
}