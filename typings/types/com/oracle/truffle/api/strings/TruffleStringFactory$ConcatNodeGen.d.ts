import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ConcatNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ConcatNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$ConcatNodeGen extends TruffleString$ConcatNode {
    static create(): TruffleString$ConcatNode;
    static getUncached(): TruffleString$ConcatNode;
    private constructor()
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: TruffleString$Encoding, arg3Value: boolean): TruffleString;
}