import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CopyToByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CopyToByteArrayNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$CopyToByteArrayNodeGen extends TruffleString$CopyToByteArrayNode {
    static create(): TruffleString$CopyToByteArrayNode;
    static getUncached(): TruffleString$CopyToByteArrayNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number[], arg3Value: number, arg4Value: number, arg5Value: TruffleString$Encoding): void;
}