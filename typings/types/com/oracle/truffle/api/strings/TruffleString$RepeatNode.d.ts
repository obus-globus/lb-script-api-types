import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$CalcStringAttributesNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$CalcStringAttributesNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$InternalAsTruffleStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$InternalAsTruffleStringNode.d.ts'
export abstract class TruffleString$RepeatNode extends AbstractPublicNode {
    static create(): TruffleString$RepeatNode;
    static getUncached(): TruffleString$RepeatNode;
    constructor()
    execute(a: AbstractTruffleString, n: number, expectedEncoding: TruffleString$Encoding): TruffleString;
    repeat(a: AbstractTruffleString, n: number, expectedEncoding: TruffleString$Encoding, asTruffleStringNode: TruffleString$InternalAsTruffleStringNode, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, impreciseProfile: InlinedConditionProfile, calcCodePointLengthProfile: InlinedConditionProfile, calcStringAttributesNode: TStringInternalNodes$CalcStringAttributesNode, brokenProfile: InlinedConditionProfile, outOfMemoryProfile: InlinedBranchProfile, compactProfile: InlinedBranchProfile): TruffleString;
}