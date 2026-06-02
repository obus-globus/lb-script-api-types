import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TStringInternalNodes$ConcatMaterializeBytesNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$ConcatMaterializeBytesNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class MutableTruffleString$ConcatNode extends AbstractPublicNode {
    static create(): MutableTruffleString$ConcatNode;
    static getUncached(): MutableTruffleString$ConcatNode;
    constructor()
    concat(a: AbstractTruffleString, b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile, materializeBytesNode: TStringInternalNodes$ConcatMaterializeBytesNode, outOfMemoryProfile: InlinedBranchProfile): MutableTruffleString;
    execute(a: AbstractTruffleString, b: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): MutableTruffleString;
}