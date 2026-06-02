import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCodePointNode.d.ts'
export class TruffleStringBuilderFactory$AppendCodePointNodeGen extends TruffleStringBuilder$AppendCodePointNode {
    static create(): TruffleStringBuilder$AppendCodePointNode;
    static getUncached(): TruffleStringBuilder$AppendCodePointNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: TruffleStringBuilder, arg1Value: number, arg2Value: number, arg3Value: boolean): void;
}