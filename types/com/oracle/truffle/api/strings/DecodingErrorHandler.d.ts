import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { DecodingErrorHandler$Result } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler$Result.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DecodingErrorHandler extends Object{
    apply(string: AbstractTruffleString, bytePosition: number, estimatedByteLength: number): DecodingErrorHandler$Result;
}