import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$CalcStringAttributesNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$CalcStringAttributesNode.d.ts'
import type { TStringInternalNodes$GetCodePointLengthNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetCodePointLengthNode.d.ts'
import type { TStringInternalNodes$GetPreciseCodeRangeNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetPreciseCodeRangeNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$AsTruffleStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$AsTruffleStringNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$RepeatNode extends AbstractPublicNode {
    static create(): TruffleString$RepeatNode;
    static getUncached(): TruffleString$RepeatNode;
    constructor()
    execute(a: AbstractTruffleString, n: number, expectedEncoding: TruffleString$Encoding): TruffleString;
    repeat(a: AbstractTruffleString, n: number, expectedEncoding: TruffleString$Encoding, asTruffleStringNode: TruffleString$AsTruffleStringNode, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getPreciseCodeRangeNode: TStringInternalNodes$GetPreciseCodeRangeNode, getCodePointLengthNode: TStringInternalNodes$GetCodePointLengthNode, calcStringAttributesNode: TStringInternalNodes$CalcStringAttributesNode, brokenProfile: InlinedConditionProfile, outOfMemoryProfile: InlinedBranchProfile, compactProfile: InlinedBranchProfile): TruffleString;
}