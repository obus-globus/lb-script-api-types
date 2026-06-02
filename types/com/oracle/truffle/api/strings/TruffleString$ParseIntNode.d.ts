import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedIntValueProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedIntValueProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetPreciseCodeRangeNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetPreciseCodeRangeNode.d.ts'
import type { TStringInternalNodes$ParseIntNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$ParseIntNode.d.ts'
export abstract class TruffleString$ParseIntNode extends AbstractPublicNode {
    static create(): TruffleString$ParseIntNode;
    static getUncached(): TruffleString$ParseIntNode;
    constructor()
    doLazyLong(a: AbstractTruffleString, radix: number, errorProfile: InlinedBranchProfile): number;
    doParse(a: AbstractTruffleString, radix: number, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getCodeRangeANode: TStringInternalNodes$GetPreciseCodeRangeNode, parseIntNode: TStringInternalNodes$ParseIntNode, radixProfile: InlinedIntValueProfile): number;
    execute(a: AbstractTruffleString, radix: number): number;
}