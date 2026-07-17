import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$ByteIndexOfCodePointSetNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointSetNode.d.ts'
import type { TruffleString$CodePointSet } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TruffleStringFactory$ByteIndexOfCodePointSetNodeGen extends TruffleString$ByteIndexOfCodePointSetNode {
    static create(): TruffleString$ByteIndexOfCodePointSetNode;
    static getUncached(): TruffleString$ByteIndexOfCodePointSetNode;
    private constructor()
    // private branchProfiles_: BranchProfile[];
    // private internalNode__field1_: Object;
    // private state_0_: number;
    execute(a: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, codePointSet: TruffleString$CodePointSet): number;
    execute(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$CodePointSet, arg4Value: boolean): number;
    // private executeAndSpecialize(arg0Value: AbstractTruffleString, arg1Value: number, arg2Value: number, arg3Value: TruffleString$CodePointSet, arg4Value: boolean): number;
}