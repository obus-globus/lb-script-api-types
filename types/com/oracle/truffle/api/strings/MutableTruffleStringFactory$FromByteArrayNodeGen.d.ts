import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$FromByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$FromByteArrayNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class MutableTruffleStringFactory$FromByteArrayNodeGen extends MutableTruffleString$FromByteArrayNode {
    static create(): MutableTruffleString$FromByteArrayNode;
    static getUncached(): MutableTruffleString$FromByteArrayNode;
    private constructor()
    execute(arg0Value: number[], arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): MutableTruffleString;
}