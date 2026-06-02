import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$CharIndexOfAnyCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CharIndexOfAnyCharUTF16Node.d.ts'
export class TruffleStringFactory$CharIndexOfAnyCharUTF16NodeGen extends TruffleString$CharIndexOfAnyCharUTF16Node {
    static create(): TruffleString$CharIndexOfAnyCharUTF16Node;
    static getUncached(): TruffleString$CharIndexOfAnyCharUTF16Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: string[]): number;
}