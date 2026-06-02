import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$LastIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$LastIndexOfStringNode.d.ts'
export class TruffleStringFactory$LastIndexOfStringNodeGen extends TruffleString$LastIndexOfStringNode {
    static create(): TruffleString$LastIndexOfStringNode;
    static getUncached(): TruffleString$LastIndexOfStringNode;
    private constructor()
    // private indexOfStringNode__field1_: Node;
    // private indexOfStringNode__field2_: Node;
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number, arg4Value: TruffleString$Encoding): number;
}