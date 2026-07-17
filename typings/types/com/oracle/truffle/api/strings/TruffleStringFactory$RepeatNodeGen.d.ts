import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$RepeatNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$RepeatNode.d.ts'
export class TruffleStringFactory$RepeatNodeGen extends TruffleString$RepeatNode {
    static create(): TruffleString$RepeatNode;
    static getUncached(): TruffleString$RepeatNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: TruffleString$Encoding): TruffleString;
}