import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetPreciseCodeRangeNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetPreciseCodeRangeNode.d.ts'
import type { TruffleStringBuilder } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilder.d.ts'
import type { TruffleStringBuilderUTF16 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF16.d.ts'
import type { TruffleStringBuilderUTF32 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF32.d.ts'
import type { TruffleStringBuilderUTF8 } from '../../../../../com/oracle/truffle/api/strings/TruffleStringBuilderUTF8.d.ts'
export abstract class TruffleStringBuilder$AppendSubstringByteIndexNode extends AbstractPublicNode {
    static create(): TruffleStringBuilder$AppendSubstringByteIndexNode;
    static getUncached(): TruffleStringBuilder$AppendSubstringByteIndexNode;
    constructor()
    append(sb: TruffleStringBuilderUTF16, a: AbstractTruffleString, fromByteIndex: number, byteLength: number, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getPreciseCodeRangeNode: TStringInternalNodes$GetPreciseCodeRangeNode, slowPathProfile: InlinedBranchProfile, inflateProfile: InlinedBranchProfile, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    append(sb: TruffleStringBuilderUTF32, a: AbstractTruffleString, fromByteIndex: number, byteLength: number, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, getPreciseCodeRangeNode: TStringInternalNodes$GetPreciseCodeRangeNode, slowPathProfile: InlinedBranchProfile, inflateProfile: InlinedBranchProfile, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    append(sb: TruffleStringBuilderUTF8, a: AbstractTruffleString, fromIndex: number, length: number, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, bufferGrowProfile: InlinedBranchProfile, errorProfile: InlinedBranchProfile): void;
    execute(sb: TruffleStringBuilder, a: AbstractTruffleString, fromByteIndex: number, byteLength: number): void;
}