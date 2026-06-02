import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringOpsNodes$CalculateHashCodeNode } from '../../../../../com/oracle/truffle/api/strings/TStringOpsNodes$CalculateHashCodeNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$HashCodeNode extends AbstractPublicNode {
    static create(): TruffleString$HashCodeNode;
    static getUncached(): TruffleString$HashCodeNode;
    constructor()
    calculateHash(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, cacheMiss: InlinedConditionProfile, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, calculateHashCodeNode: TStringOpsNodes$CalculateHashCodeNode): number;
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): number;
}