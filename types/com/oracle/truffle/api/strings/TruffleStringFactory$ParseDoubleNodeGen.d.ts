import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ParseDoubleNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ParseDoubleNode.d.ts'
export class TruffleStringFactory$ParseDoubleNodeGen extends TruffleString$ParseDoubleNode {
    static create(): TruffleString$ParseDoubleNode;
    static getUncached(): TruffleString$ParseDoubleNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString): number;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString): number;
    // private fallbackGuard_(state_0: number, arg0Value: AbstractTruffleString): boolean;
}