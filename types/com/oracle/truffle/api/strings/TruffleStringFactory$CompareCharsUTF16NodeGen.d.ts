import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CompareCharsUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompareCharsUTF16Node.d.ts'
export class TruffleStringFactory$CompareCharsUTF16NodeGen extends TruffleString$CompareCharsUTF16Node {
    static create(): TruffleString$CompareCharsUTF16Node;
    static getUncached(): TruffleString$CompareCharsUTF16Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString): number;
}