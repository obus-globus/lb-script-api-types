import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendCodePointNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export class TruffleStringBuilderFactory$AppendCodePointNodeGen extends TruffleStringBuilder$AppendCodePointNode {
    static create(): TruffleStringBuilder$AppendCodePointNode;
    static getUncached(): TruffleStringBuilder$AppendCodePointNode;
    private constructor()
    // private state_0_: number;
    execute(sb: TruffleStringBuilder, codepoint: number): void;
    execute(sb: TruffleStringBuilder, codepoint: number, repeat: number): void;
    execute(arg0Value: TruffleStringBuilder, arg1Value: number, arg2Value: number, arg3Value: boolean): void;
    execute(sb: TruffleStringBuilderUTF16, codepoint: number): void;
    execute(sb: TruffleStringBuilderUTF16, codepoint: number, repeat: number): void;
    execute(arg0Value: TruffleStringBuilderUTF16, arg1Value: number, arg2Value: number, arg3Value: boolean): void;
    execute(sb: TruffleStringBuilderUTF32, codepoint: number): void;
    execute(sb: TruffleStringBuilderUTF32, codepoint: number, repeat: number): void;
    execute(arg0Value: TruffleStringBuilderUTF32, arg1Value: number, arg2Value: number, arg3Value: boolean): void;
    execute(sb: TruffleStringBuilderUTF8, codepoint: number): void;
    execute(sb: TruffleStringBuilderUTF8, codepoint: number, repeat: number): void;
    execute(arg0Value: TruffleStringBuilderUTF8, arg1Value: number, arg2Value: number, arg3Value: boolean): void;
}