import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { DecodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler.d.ts'
import type { DecodingErrorHandler$Result } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler$Result.d.ts'
import type { TranscodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler.d.ts'
import type { TranscodingErrorHandler$ReplacementString } from '../../../../../com/oracle/truffle/api/strings/TranscodingErrorHandler$ReplacementString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface JCodings extends Object {
    calcStringAttributes(location: Node, a: AbstractTruffleString, arrayA: number[], offsetA: number, lengthA: number, encodingA: TruffleString$Encoding, fromIndexA: number): number;
    codePointIndexToRaw(location: Node, a: AbstractTruffleString, arrayA: number[], extraOffsetRaw: number, index: number, isLength: boolean, encoding: TruffleString$Encoding): number;
    decode(a: AbstractTruffleString, arrayA: number[], rawIndex: number, encoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling): number;
    getCodePointLength(encoding: TruffleString$Encoding, array: number[], index: number, arrayLength: number): number;
    getCodePointLength(encoding: TruffleString$Encoding, codepoint: number): number;
    getPreviousCodePointIndex(encoding: TruffleString$Encoding, array: number[], arrayBegin: number, index: number, arrayEnd: number): number;
    isFixedWidth(encoding: TruffleString$Encoding): boolean;
    isSingleByte(encoding: TruffleString$Encoding): boolean;
    isValidCodePoint(encoding: TruffleString$Encoding, codepoint: number): boolean;
    maxLength(encoding: TruffleString$Encoding): number;
    minLength(encoding: TruffleString$Encoding): number;
    readCodePoint(encoding: TruffleString$Encoding, array: number[], index: number, arrayEnd: number, errorHandler: (param0: AbstractTruffleString, param1: number, param2: number) => DecodingErrorHandler$Result): number;
    transcode(location: Node, a: AbstractTruffleString, arrayA: number[], codePointLengthA: number, targetEncoding: TruffleString$Encoding, errorHandler: (param0: AbstractTruffleString, param1: number, param2: number, param3: TruffleString$Encoding, param4: TruffleString$Encoding) => TranscodingErrorHandler$ReplacementString): TruffleString;
    writeCodePoint(encoding: TruffleString$Encoding, codepoint: number, array: number[], index: number): number;
}