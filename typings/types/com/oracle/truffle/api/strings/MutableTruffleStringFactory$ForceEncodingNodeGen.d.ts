import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$ForceEncodingNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$ForceEncodingNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class MutableTruffleStringFactory$ForceEncodingNodeGen extends MutableTruffleString$ForceEncodingNode {
    static create(): MutableTruffleString$ForceEncodingNode;
    static getUncached(): MutableTruffleString$ForceEncodingNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: TruffleString$Encoding): MutableTruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: TruffleString$Encoding): MutableTruffleString;
}