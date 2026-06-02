import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$SubstringByteIndexNode.d.ts'
import type { TruffleString$CopyToByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CopyToByteArrayNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class MutableTruffleStringFactory$SubstringByteIndexNodeGen extends MutableTruffleString$SubstringByteIndexNode {
    static create(): MutableTruffleString$SubstringByteIndexNode;
    static getUncached(): MutableTruffleString$SubstringByteIndexNode;
    private constructor()
    // private copyToByteArrayNode_: TruffleString$CopyToByteArrayNode;
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding): MutableTruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding): MutableTruffleString;
}