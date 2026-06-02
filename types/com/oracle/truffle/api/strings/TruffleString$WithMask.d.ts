import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleString$WithMask extends Object {
    static createUTF16Uncached(parama: AbstractTruffleString, parammask: string[]): TruffleString$WithMask;
    static createUTF32Uncached(parama: AbstractTruffleString, parammask: number[]): TruffleString$WithMask;
    static createUncached(parama: AbstractTruffleString, parammask: number[], paramexpectedEncoding: TruffleString$Encoding): TruffleString$WithMask;
    constructor(string: AbstractTruffleString, mask: number[])
    // private mask: number[];
    // private string: AbstractTruffleString;
}