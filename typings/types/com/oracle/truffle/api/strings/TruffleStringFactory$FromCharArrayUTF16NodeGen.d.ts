import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromCharArrayUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromCharArrayUTF16Node.d.ts'
export class TruffleStringFactory$FromCharArrayUTF16NodeGen extends TruffleString$FromCharArrayUTF16Node {
    static create(): TruffleString$FromCharArrayUTF16Node;
    static getUncached(): TruffleString$FromCharArrayUTF16Node;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: string[], arg1Value: number, arg2Value: number): TruffleString;
}