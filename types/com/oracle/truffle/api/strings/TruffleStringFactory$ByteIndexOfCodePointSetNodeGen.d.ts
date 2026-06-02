import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ByteIndexOfCodePointSetNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointSetNode.d.ts'
import type { TruffleString$CodePointSet } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointSet.d.ts'
import type { TruffleStringFactory$ByteIndexOfCodePointSetNodeGen$IndexOfSpecializedData } from '../../../../../com/oracle/truffle/api/strings/TruffleStringFactory$ByteIndexOfCodePointSetNodeGen$IndexOfSpecializedData.d.ts'
export class TruffleStringFactory$ByteIndexOfCodePointSetNodeGen extends TruffleString$ByteIndexOfCodePointSetNode {
    static create(): TruffleString$ByteIndexOfCodePointSetNode;
    static getUncached(): TruffleString$ByteIndexOfCodePointSetNode;
    private constructor()
    // private indexOfSpecialized_cache: TruffleStringFactory$ByteIndexOfCodePointSetNodeGen$IndexOfSpecializedData;
    // private indexOfUncached_nextNode__field1_: number;
    // private state_0_: number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$CodePointSet, arg4Value: boolean): number;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$CodePointSet, arg4Value: boolean): number;
}