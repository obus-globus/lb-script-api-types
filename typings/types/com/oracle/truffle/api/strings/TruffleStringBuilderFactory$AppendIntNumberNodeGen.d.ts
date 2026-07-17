import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendIntNumberNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendIntNumberNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export class TruffleStringBuilderFactory$AppendIntNumberNodeGen extends TruffleStringBuilder$AppendIntNumberNode {
    static create(): TruffleStringBuilder$AppendIntNumberNode;
    static getUncached(): TruffleStringBuilder$AppendIntNumberNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: TruffleStringBuilder, arg1Value: number): void;
    execute(arg0Value: TruffleStringBuilderUTF16, arg1Value: number): void;
    execute(arg0Value: TruffleStringBuilderUTF32, arg1Value: number): void;
    execute(arg0Value: TruffleStringBuilderUTF8, arg1Value: number): void;
    // private executeAndSpecialize(arg0Value: TruffleStringBuilder, arg1Value: number): void;
}