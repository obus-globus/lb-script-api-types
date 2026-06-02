import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ReadByteNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ReadByteNode.d.ts'
export class TruffleStringFactory$ReadByteNodeGen extends TruffleString$ReadByteNode {
    static create(): TruffleString$ReadByteNode;
    static getUncached(): TruffleString$ReadByteNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: TruffleString$Encoding): number;
}