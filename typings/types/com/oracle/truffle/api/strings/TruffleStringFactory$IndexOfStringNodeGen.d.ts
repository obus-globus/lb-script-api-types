import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$IndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$IndexOfStringNode.d.ts'
export class TruffleStringFactory$IndexOfStringNodeGen extends TruffleString$IndexOfStringNode {
    static create(): TruffleString$IndexOfStringNode;
    static getUncached(): TruffleString$IndexOfStringNode;
    private constructor()
    // private indexOfStringNode__field2_: Node;
    // private indexOfStringNode__field3_: number;
    // private indexOfStringNode__field4_: number;
    // private state_0_: number;
    // private state_1_: number;
    // private state_2_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number, arg4Value: TruffleString$Encoding): number;
}