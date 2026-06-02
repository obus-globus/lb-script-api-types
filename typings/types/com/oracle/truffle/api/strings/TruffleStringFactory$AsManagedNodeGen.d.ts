import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$AsManagedNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$AsManagedNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$AsManagedNodeGen extends TruffleString$AsManagedNode {
    static create(): TruffleString$AsManagedNode;
    static getUncached(): TruffleString$AsManagedNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding, arg2Value: boolean): TruffleString;
}