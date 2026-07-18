import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedIntValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedIntValueProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetPreciseCodeRangeNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetPreciseCodeRangeNode.d.ts'
import type { TStringInternalNodes$ParseLongNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$ParseLongNode.d.ts'
export abstract class TruffleString$ParseLongNode extends AbstractPublicNode {
    static create(): TruffleString$ParseLongNode;
    static getUncached(): TruffleString$ParseLongNode;
    constructor()
    doParse(a: AbstractTruffleString, radix: number, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeANode: TStringInternalNodes$GetPreciseCodeRangeNode, parseLongNode: TStringInternalNodes$ParseLongNode, radixProfile: InlinedIntValueProfile): number;
    execute(a: AbstractTruffleString, radix: number): number;
}