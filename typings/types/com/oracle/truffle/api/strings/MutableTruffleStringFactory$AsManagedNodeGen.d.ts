import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { MutableTruffleString$AsManagedNode } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString$AsManagedNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class MutableTruffleStringFactory$AsManagedNodeGen extends MutableTruffleString$AsManagedNode {
    static create(): MutableTruffleString$AsManagedNode;
    static getUncached(): MutableTruffleString$AsManagedNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): MutableTruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): MutableTruffleString;
}