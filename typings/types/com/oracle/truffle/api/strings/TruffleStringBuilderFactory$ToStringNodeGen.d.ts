import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export class TruffleStringBuilderFactory$ToStringNodeGen extends TruffleStringBuilder$ToStringNode {
    static create(): TruffleStringBuilder$ToStringNode;
    static getUncached(): TruffleStringBuilder$ToStringNode;
    private constructor()
    // private state_0_: number;
    execute(sb: TruffleStringBuilder): TruffleString;
    execute(arg0Value: TruffleStringBuilder, arg1Value: boolean): TruffleString;
    execute(sb: TruffleStringBuilderUTF16): TruffleString;
    execute(arg0Value: TruffleStringBuilderUTF16, arg1Value: boolean): TruffleString;
    execute(sb: TruffleStringBuilderUTF32): TruffleString;
    execute(arg0Value: TruffleStringBuilderUTF32, arg1Value: boolean): TruffleString;
    execute(sb: TruffleStringBuilderUTF8): TruffleString;
    execute(arg0Value: TruffleStringBuilderUTF8, arg1Value: boolean): TruffleString;
}