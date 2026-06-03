import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$FromByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromByteArrayNode.d.ts'
export class TruffleStringFactory$FromByteArrayNodeGen extends TruffleString$FromByteArrayNode {
    static create(): TruffleString$FromByteArrayNode;
    static getUncached(): TruffleString$FromByteArrayNode;
    private constructor()
    // private fromBufferWithStringCompactionNode__field1_: number;
    // private state_0_: number;
    execute(value: number[], encoding: TruffleString$Encoding): TruffleString;
    execute(value: number[], encoding: TruffleString$Encoding, copy: boolean): TruffleString;
    execute(arg0Value: number[], arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
}