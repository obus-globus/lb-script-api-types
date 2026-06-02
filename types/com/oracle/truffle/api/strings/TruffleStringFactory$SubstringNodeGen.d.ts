import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$SubstringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringNode.d.ts'
export class TruffleStringFactory$SubstringNodeGen extends TruffleString$SubstringNode {
    static create(): TruffleString$SubstringNode;
    static getUncached(): TruffleString$SubstringNode;
    private constructor()
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$Encoding, arg4Value: boolean): TruffleString;
}