import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromIntArrayUTF32Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromIntArrayUTF32Node.d.ts'
export class TruffleStringFactory$FromIntArrayUTF32NodeGen extends TruffleString$FromIntArrayUTF32Node {
    static create(): TruffleString$FromIntArrayUTF32Node;
    static getUncached(): TruffleString$FromIntArrayUTF32Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: number[], arg1Value: number, arg2Value: number): TruffleString;
}