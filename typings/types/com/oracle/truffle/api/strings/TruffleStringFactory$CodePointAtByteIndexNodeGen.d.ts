import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodePointAtByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointAtByteIndexNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
export class TruffleStringFactory$CodePointAtByteIndexNodeGen extends TruffleString$CodePointAtByteIndexNode {
    static create(): TruffleString$CodePointAtByteIndexNode;
    static getUncached(): TruffleString$CodePointAtByteIndexNode;
    private constructor()
    // private state_0_: number;
    // private state_1_: number;
    execute(a: AbstractTruffleString, i: number, expectedEncoding: TruffleString$Encoding): number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: TruffleString$Encoding, arg3Value: TruffleString$ErrorHandling): number;
}