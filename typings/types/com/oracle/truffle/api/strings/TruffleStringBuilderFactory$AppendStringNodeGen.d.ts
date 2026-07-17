import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export class TruffleStringBuilderFactory$AppendStringNodeGen extends TruffleStringBuilder$AppendStringNode {
    static create(): TruffleStringBuilder$AppendStringNode;
    static getUncached(): TruffleStringBuilder$AppendStringNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: TruffleStringBuilder, arg1Value: AbstractTruffleString): void;
    execute(arg0Value: TruffleStringBuilderUTF16, arg1Value: AbstractTruffleString): void;
    execute(arg0Value: TruffleStringBuilderUTF32, arg1Value: AbstractTruffleString): void;
    execute(arg0Value: TruffleStringBuilderUTF8, arg1Value: AbstractTruffleString): void;
}