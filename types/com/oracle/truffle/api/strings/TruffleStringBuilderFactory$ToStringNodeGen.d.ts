import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilder$ToStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder$ToStringNode.d.ts'
export class TruffleStringBuilderFactory$ToStringNodeGen extends TruffleStringBuilder$ToStringNode {
    static create(): TruffleStringBuilder$ToStringNode;
    static getUncached(): TruffleStringBuilder$ToStringNode;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: TruffleStringBuilder, arg1Value: boolean): TruffleString;
}