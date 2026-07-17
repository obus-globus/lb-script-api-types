import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CodePointAtIndexUTF32Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointAtIndexUTF32Node.d.ts'
export class TruffleStringFactory$CodePointAtIndexUTF32NodeGen extends TruffleString$CodePointAtIndexUTF32Node {
    static create(): TruffleString$CodePointAtIndexUTF32Node;
    static getUncached(): TruffleString$CodePointAtIndexUTF32Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number): number;
}