import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodePointIndexToByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointIndexToByteIndexNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$CodePointIndexToByteIndexNodeGen extends TruffleString$CodePointIndexToByteIndexNode {
    static create(): TruffleString$CodePointIndexToByteIndexNode;
    static getUncached(): TruffleString$CodePointIndexToByteIndexNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding): number;
}