import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendSubstringByteIndexNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendSubstringByteIndexNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export class TruffleStringBuilderFactory$AppendSubstringByteIndexNodeGen extends TruffleStringBuilder$AppendSubstringByteIndexNode {
    static create(): TruffleStringBuilder$AppendSubstringByteIndexNode;
    static getUncached(): TruffleStringBuilder$AppendSubstringByteIndexNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: TruffleStringBuilder, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number): void;
    execute(arg0Value: TruffleStringBuilderUTF16, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number): void;
    execute(arg0Value: TruffleStringBuilderUTF32, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number): void;
    execute(arg0Value: TruffleStringBuilderUTF8, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number): void;
    // private executeAndSpecialize(arg0Value: TruffleStringBuilder, arg1Value: AbstractTruffleString, arg2Value: number, arg3Value: number): void;
}