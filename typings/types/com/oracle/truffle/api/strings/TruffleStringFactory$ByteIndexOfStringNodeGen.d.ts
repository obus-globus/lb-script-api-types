import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$WithMask } from '../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
export class TruffleStringFactory$ByteIndexOfStringNodeGen extends TruffleString$ByteIndexOfStringNode {
    static create(): TruffleString$ByteIndexOfStringNode;
    static getUncached(): TruffleString$ByteIndexOfStringNode;
    private constructor()
    // private indexOfStringNode__field1_: Node;
    // private state_0_: number;
    execute(a: AbstractTruffleString, b: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, expectedEncoding: TruffleString$Encoding): number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number, arg4Value: number[], arg5Value: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, b: TruffleString$WithMask, fromByteIndex: number, toByteIndex: number, expectedEncoding: TruffleString$Encoding): number;
}