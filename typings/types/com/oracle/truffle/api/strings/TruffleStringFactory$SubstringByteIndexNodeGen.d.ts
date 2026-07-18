import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
export class TruffleStringFactory$SubstringByteIndexNodeGen extends TruffleString$SubstringByteIndexNode {
    static create(): TruffleString$SubstringByteIndexNode;
    static getUncached(): TruffleString$SubstringByteIndexNode;
    private constructor()
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
    // private fallbackGuard_(state_0: number, arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): boolean;
}