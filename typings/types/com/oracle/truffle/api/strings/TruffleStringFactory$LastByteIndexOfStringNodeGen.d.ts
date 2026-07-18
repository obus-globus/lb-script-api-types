import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$LastByteIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$LastByteIndexOfStringNode.d.ts'
import type { TruffleString$WithMask } from '../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
export class TruffleStringFactory$LastByteIndexOfStringNodeGen extends TruffleString$LastByteIndexOfStringNode {
    static create(): TruffleString$LastByteIndexOfStringNode;
    static getUncached(): TruffleString$LastByteIndexOfStringNode;
    private constructor()
    // private indexOfStringNode__field1_: Node;
    // private indexOfStringNode__field2_: Node;
    // private state_0_: number;
    execute(a: AbstractTruffleString, b: AbstractTruffleString, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number, arg4Value: number[], arg5Value: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, b: TruffleString$WithMask, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
}