import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$IntIndexOfAnyIntUTF32Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$IntIndexOfAnyIntUTF32Node.d.ts'
export class TruffleStringFactory$IntIndexOfAnyIntUTF32NodeGen extends TruffleString$IntIndexOfAnyIntUTF32Node {
    static create(): TruffleString$IntIndexOfAnyIntUTF32Node;
    static getUncached(): TruffleString$IntIndexOfAnyIntUTF32Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: number[]): number;
}