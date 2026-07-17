import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendByteNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendByteNode.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export class TruffleStringBuilderFactory$AppendByteNodeGen extends TruffleStringBuilder$AppendByteNode {
    static create(): TruffleStringBuilder$AppendByteNode;
    static getUncached(): TruffleStringBuilder$AppendByteNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: TruffleStringBuilder, arg1Value: number): void;
    execute(arg0Value: TruffleStringBuilderUTF8, arg1Value: number): void;
    // private executeAndSpecialize(arg0Value: TruffleStringBuilder, arg1Value: number): void;
}