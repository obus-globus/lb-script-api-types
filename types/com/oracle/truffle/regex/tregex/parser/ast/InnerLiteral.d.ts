import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$WithMask } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InnerLiteral extends Object {
    constructor(literal: number[], mask: number[], maxPrefixSize: number)
    readonly literal: number[];
    // private literalTString: TruffleString;
    readonly mask: number[];
    // private maskTString: TruffleString$WithMask;
    readonly maxPrefixSize: number;
    getLiteral(): number[];
    getLiteralContent(): TruffleString;
    getMask(): number[];
    getMaskContent(): TruffleString$WithMask;
    getMaxPrefixSize(): number;
    hasMask(): boolean;
}