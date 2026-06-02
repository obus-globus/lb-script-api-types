import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$HashCodeNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$HashCodeNode.d.ts'
export class TruffleStringFactory$HashCodeNodeGen extends TruffleString$HashCodeNode {
    static create(): TruffleString$HashCodeNode;
    static getUncached(): TruffleString$HashCodeNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): number;
}