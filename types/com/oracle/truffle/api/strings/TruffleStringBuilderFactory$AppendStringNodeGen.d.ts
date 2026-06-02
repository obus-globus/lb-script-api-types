import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$AppendStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$AppendStringNode.d.ts'
export class TruffleStringBuilderFactory$AppendStringNodeGen extends TruffleStringBuilder$AppendStringNode {
    static create(): TruffleStringBuilder$AppendStringNode;
    static getUncached(): TruffleStringBuilder$AppendStringNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: TruffleStringBuilder, arg1Value: AbstractTruffleString): void;
}