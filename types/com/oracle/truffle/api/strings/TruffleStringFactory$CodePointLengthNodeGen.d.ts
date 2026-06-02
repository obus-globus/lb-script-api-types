import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodePointLengthNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointLengthNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export class TruffleStringFactory$CodePointLengthNodeGen extends TruffleString$CodePointLengthNode {
    static create(): TruffleString$CodePointLengthNode;
    static getUncached(): TruffleString$CodePointLengthNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$Encoding): number;
}