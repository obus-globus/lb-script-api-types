import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
export class TruffleStringFactory$ReadCharUTF16NodeGen extends TruffleString$ReadCharUTF16Node {
    static create(): TruffleString$ReadCharUTF16Node;
    static getUncached(): TruffleString$ReadCharUTF16Node;
    private constructor()
    // private state_0_: number;
    execute(a: AbstractTruffleString, charIndex: number): string;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: boolean): string;
}