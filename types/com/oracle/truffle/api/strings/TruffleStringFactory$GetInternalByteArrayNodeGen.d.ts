import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { InternalByteArray } from '../../../../../com/oracle/truffle/api/strings/InternalByteArray.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$GetInternalByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$GetInternalByteArrayNode.d.ts'
export class TruffleStringFactory$GetInternalByteArrayNodeGen extends TruffleString$GetInternalByteArrayNode {
    static create(): TruffleString$GetInternalByteArrayNode;
    static getUncached(): TruffleString$GetInternalByteArrayNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): InternalByteArray;
}