import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$ConcatNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$ConcatNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class MutableTruffleStringFactory$ConcatNodeGen extends MutableTruffleString$ConcatNode {
    static create(): MutableTruffleString$ConcatNode;
    static getUncached(): MutableTruffleString$ConcatNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: TruffleString$Encoding): MutableTruffleString;
}