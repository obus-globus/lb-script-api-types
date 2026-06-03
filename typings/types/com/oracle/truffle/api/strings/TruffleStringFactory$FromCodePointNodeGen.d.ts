import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$FromCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromCodePointNode.d.ts'
export class TruffleStringFactory$FromCodePointNodeGen extends TruffleString$FromCodePointNode {
    static create(): TruffleString$FromCodePointNode;
    static getUncached(): TruffleString$FromCodePointNode;
    private constructor()
    // private state_0_: number;
    execute(codepoint: number, encoding: TruffleString$Encoding): TruffleString;
    execute(arg0Value: number, arg1Value: TruffleString$Encoding, arg2Value: boolean): TruffleString;
}