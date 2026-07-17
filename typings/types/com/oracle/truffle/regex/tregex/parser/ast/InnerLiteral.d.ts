import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$WithMask } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
import type { AbstractStringBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/string/AbstractStringBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InnerLiteral extends Object {
    constructor(literal: AbstractStringBuffer, mask: AbstractStringBuffer, maxPrefixSize: number)
    readonly encodedLength: number;
    readonly literal: TruffleString;
    readonly mask: TruffleString$WithMask;
    readonly maxPrefixSize: number;
    getEncodedLength(): number;
    getLiteral(): TruffleString;
    getMask(): TruffleString$WithMask;
    getMaxPrefixSize(): number;
    hasMask(): boolean;
}