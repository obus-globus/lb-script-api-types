import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CompareIntsUTF32Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompareIntsUTF32Node.d.ts'
export class TruffleStringFactory$CompareIntsUTF32NodeGen extends TruffleString$CompareIntsUTF32Node {
    static create(): TruffleString$CompareIntsUTF32Node;
    static getUncached(): TruffleString$CompareIntsUTF32Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString): number;
}