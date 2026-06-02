import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$WriteByteNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$WriteByteNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class MutableTruffleStringFactory$WriteByteNodeGen extends MutableTruffleString$WriteByteNode {
    static create(): MutableTruffleString$WriteByteNode;
    static getUncached(): MutableTruffleString$WriteByteNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: MutableTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding): void;
}