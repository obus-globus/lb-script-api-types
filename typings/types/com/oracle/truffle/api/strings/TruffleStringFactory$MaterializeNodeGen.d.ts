import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$MaterializeNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$MaterializeNode.d.ts'
export class TruffleStringFactory$MaterializeNodeGen extends TruffleString$MaterializeNode {
    static create(): TruffleString$MaterializeNode;
    static getUncached(): TruffleString$MaterializeNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): void;
}