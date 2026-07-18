import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ToValidStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ToValidStringNode.d.ts'
export class TruffleStringFactory$ToValidStringNodeGen extends TruffleString$ToValidStringNode {
    static create(): TruffleString$ToValidStringNode;
    static getUncached(): TruffleString$ToValidStringNode;
    private constructor()
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): TruffleString;
}