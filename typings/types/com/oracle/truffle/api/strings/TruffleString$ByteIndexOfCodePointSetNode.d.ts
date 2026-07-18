import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TruffleString$CodePointSet } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointSet.d.ts'
import type { TruffleStringIterator$InternalNextNode } from '../../../../../com/oracle/truffle/api/strings/TruffleStringIterator$InternalNextNode.d.ts'
export abstract class TruffleString$ByteIndexOfCodePointSetNode extends AbstractPublicNode {
    static create(): TruffleString$ByteIndexOfCodePointSetNode;
    static getUncached(): TruffleString$ByteIndexOfCodePointSetNode;
    constructor()
    execute(a: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, codePointSet: TruffleString$CodePointSet): number;
    execute(a: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, codePointSet: TruffleString$CodePointSet, usePreciseCodeRange: boolean): number;
    indexOfUncached(a: AbstractTruffleString, fromByteIndex: number, toByteIndex: number, codePointSet: TruffleString$CodePointSet, usePreciseCodeRange: boolean, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, nextNode: TruffleStringIterator$InternalNextNode): number;
}