import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { DecodingErrorHandler } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler.d.ts'
import type { DecodingErrorHandler$Result } from '../../../../../com/oracle/truffle/api/strings/DecodingErrorHandler$Result.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleStringIterator extends Object {
    constructor(a: AbstractTruffleString, arrayA: number[], offsetA: number, lengthA: number, strideA: number, codeRangeA: number, encoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling, rawIndex: number)
    // private a: AbstractTruffleString;
    // private arrayA: number[];
    // private codeRangeA: number;
    // private encoding: TruffleString$Encoding;
    // private errorHandling: TruffleString$ErrorHandling;
    // private lengthA: number;
    // private offsetA: number;
    // private rawIndex: number;
    // private strideA: number;
    // private applyErrorHandler(errorHandler: (param0: AbstractTruffleString, param1: number, param2: number) => DecodingErrorHandler$Result, startIndex: number): number;
    // private applyErrorHandler(errorHandler: (param0: AbstractTruffleString, param1: number, param2: number) => DecodingErrorHandler$Result, startIndex: number, forward: boolean): number;
    // private applyErrorHandlerReverse(errorHandler: (param0: AbstractTruffleString, param1: number, param2: number) => DecodingErrorHandler$Result, startIndex: number): number;
    // private curIsUtf8ContinuationByte(): boolean;
    errorHandlerSkipBytes(byteLength: number, forward: boolean): void;
    getByteIndex(): number;
    getRawIndex(): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextUncached(): number;
    nextUncached(expectedEncoding: TruffleString$Encoding): number;
    previousUncached(): number;
    previousUncached(expectedEncoding: TruffleString$Encoding): number;
    // private readAndDecS0(): number;
    // private readAndDecS1(foreignEndian: boolean): number;
    // private readAndDecS2(): number;
    // private readAndDecS2UTF32FE(): number;
    // private readAndIncS0(): number;
    // private readAndIncS1(foreignEndian: boolean): number;
    // private readAndIncS2(): number;
    // private readAndIncS2UTF32FE(): number;
    // private readBckS1(foreignEndian: boolean): number;
    // private readFwdS0(): number;
    // private readFwdS1(foreignEndian: boolean): number;
    setRawIndex(i: number): void;
}