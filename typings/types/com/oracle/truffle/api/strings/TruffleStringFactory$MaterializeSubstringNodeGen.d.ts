import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$MaterializeSubstringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$MaterializeSubstringNode.d.ts'
export class TruffleStringFactory$MaterializeSubstringNodeGen extends TruffleString$MaterializeSubstringNode {
    static create(): TruffleString$MaterializeSubstringNode;
    static getUncached(): TruffleString$MaterializeSubstringNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): TruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): TruffleString;
}