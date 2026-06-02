import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
export class TruffleStringFactory$EqualNodeGen extends TruffleString$EqualNode {
    static create(): TruffleString$EqualNode;
    static getUncached(): TruffleString$EqualNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: TruffleString$Encoding): boolean;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: TruffleString$Encoding): boolean;
    // private fallbackGuard_(state_0: number, arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: TruffleString$Encoding): boolean;
}