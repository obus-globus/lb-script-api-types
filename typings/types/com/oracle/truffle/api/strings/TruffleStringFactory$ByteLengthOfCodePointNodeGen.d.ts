import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ByteLengthOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteLengthOfCodePointNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
export class TruffleStringFactory$ByteLengthOfCodePointNodeGen extends TruffleString$ByteLengthOfCodePointNode {
    static create(): TruffleString$ByteLengthOfCodePointNode;
    static getUncached(): TruffleString$ByteLengthOfCodePointNode;
    private constructor()
    // private state_0_: number;
    execute(a: AbstractTruffleString, byteIndex: number, expectedEncoding: TruffleString$Encoding): number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: TruffleString$Encoding, arg3Value: TruffleString$ErrorHandling): number;
}