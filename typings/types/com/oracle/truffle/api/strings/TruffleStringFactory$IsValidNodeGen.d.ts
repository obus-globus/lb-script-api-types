import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$IsValidNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$IsValidNode.d.ts'
export class TruffleStringFactory$IsValidNodeGen extends TruffleString$IsValidNode {
    static create(): TruffleString$IsValidNode;
    static getUncached(): TruffleString$IsValidNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): boolean;
}