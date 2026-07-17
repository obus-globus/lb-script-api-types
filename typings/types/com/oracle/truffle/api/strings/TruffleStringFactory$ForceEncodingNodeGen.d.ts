import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ForceEncodingNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ForceEncodingNode.d.ts'
export class TruffleStringFactory$ForceEncodingNodeGen extends TruffleString$ForceEncodingNode {
    static create(): TruffleString$ForceEncodingNode;
    static getUncached(): TruffleString$ForceEncodingNode;
    private constructor()
    // private state_0_: number;
    // private state_1_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: TruffleString$Encoding): TruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: TruffleString$Encoding): TruffleString;
}