import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$AsTruffleStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$AsTruffleStringNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$AsTruffleStringNodeGen extends TruffleString$AsTruffleStringNode {
    static create(): TruffleString$AsTruffleStringNode;
    static getUncached(): TruffleString$AsTruffleStringNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): TruffleString;
}