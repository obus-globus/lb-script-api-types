import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ConcatNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ConcatNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleStringFactory$ConcatNodeGen$ConcatData } from '../../../../../com/oracle/truffle/api/strings/TruffleStringFactory$ConcatNodeGen$ConcatData.d.ts'
export class TruffleStringFactory$ConcatNodeGen extends TruffleString$ConcatNode {
    static create(): TruffleString$ConcatNode;
    static getUncached(): TruffleString$ConcatNode;
    private constructor()
    // private concat_cache: TruffleStringFactory$ConcatNodeGen$ConcatData;
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: TruffleString$Encoding, arg3Value: boolean): TruffleString;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: AbstractTruffleString, arg2Value: TruffleString$Encoding, arg3Value: boolean): TruffleString;
}