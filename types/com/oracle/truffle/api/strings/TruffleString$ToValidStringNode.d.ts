import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$GetValidOrBrokenCodeRangeNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$GetValidOrBrokenCodeRangeNode.d.ts'
import type { TStringInternalNodes$ToValidStringNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$ToValidStringNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$InternalAsTruffleStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$InternalAsTruffleStringNode.d.ts'
export abstract class TruffleString$ToValidStringNode extends AbstractPublicNode {
    static create(): TruffleString$ToValidStringNode;
    static getUncached(): TruffleString$ToValidStringNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): TruffleString;
    toValid(a: AbstractTruffleString, encoding: TruffleString$Encoding, isValidProfile: InlinedConditionProfile, getCodeRangeNode: TStringInternalNodes$GetValidOrBrokenCodeRangeNode, asTruffleStringNode: TruffleString$InternalAsTruffleStringNode, internalNode: TStringInternalNodes$ToValidStringNode, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile): TruffleString;
}