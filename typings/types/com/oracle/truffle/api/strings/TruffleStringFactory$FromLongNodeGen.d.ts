import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
export class TruffleStringFactory$FromLongNodeGen extends TruffleString$FromLongNode {
    static create(): TruffleString$FromLongNode;
    static getUncached(): TruffleString$FromLongNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: number, arg1Value: TruffleString$Encoding, arg2Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: number, arg1Value: TruffleString$Encoding, arg2Value: boolean): TruffleString;
}