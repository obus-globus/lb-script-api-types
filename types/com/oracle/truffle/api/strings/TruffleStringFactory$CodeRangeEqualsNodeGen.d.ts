import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { TruffleString$CodeRangeEqualsNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRangeEqualsNode.d.ts'
export class TruffleStringFactory$CodeRangeEqualsNodeGen extends TruffleString$CodeRangeEqualsNode {
    static create(): TruffleString$CodeRangeEqualsNode;
    static getUncached(): TruffleString$CodeRangeEqualsNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: TruffleString$CodeRange): boolean;
}