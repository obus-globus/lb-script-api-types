import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetCodeRangeForIndexCalculationNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodeRangeForIndexCalculationNode.d.ts'
import type { TStringOpsNodes$IndexOfAnyCharUTF16Node } from '../../../../../com/oracle/truffle/api/strings/TStringOpsNodes$IndexOfAnyCharUTF16Node.d.ts'
export abstract class TruffleString$CharIndexOfAnyCharUTF16Node extends AbstractPublicNode {
    static create(): TruffleString$CharIndexOfAnyCharUTF16Node;
    static getUncached(): TruffleString$CharIndexOfAnyCharUTF16Node;
    constructor()
    execute(a: AbstractTruffleString, fromCharIndex: number, maxCharIndex: number, values: string[]): number;
    indexOfRaw(a: AbstractTruffleString, fromCharIndex: number, maxCharIndex: number, values: string[], managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeNode: TStringInternalNodes$GetCodeRangeForIndexCalculationNode, indexOfNode: TStringOpsNodes$IndexOfAnyCharUTF16Node): number;
}