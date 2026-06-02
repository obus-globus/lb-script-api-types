import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$AsMutableTruffleStringNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$AsMutableTruffleStringNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class MutableTruffleStringFactory$AsMutableTruffleStringNodeGen extends MutableTruffleString$AsMutableTruffleStringNode {
    static create(): MutableTruffleString$AsMutableTruffleStringNode;
    static getUncached(): MutableTruffleString$AsMutableTruffleStringNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): MutableTruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): MutableTruffleString;
}