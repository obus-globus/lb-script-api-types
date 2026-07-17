import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$RegionEqualsNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$RegionEqualsNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$RegionEqualNode extends AbstractPublicNode {
    static create(): TruffleString$RegionEqualNode;
    static getUncached(): TruffleString$RegionEqualNode;
    constructor()
    execute(a: AbstractTruffleString, fromIndexA: number, b: AbstractTruffleString, fromIndexB: number, length: number, expectedEncoding: TruffleString$Encoding): boolean;
    regionEquals(a: AbstractTruffleString, fromIndexA: number, b: AbstractTruffleString, fromIndexB: number, length: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile, calcCodePointLengthAProfile: InlinedConditionProfile, calcCodePointLengthBProfile: InlinedConditionProfile, impreciseAProfile: InlinedConditionProfile, impreciseBProfile: InlinedConditionProfile, regionEqualsNode: TStringInternalNodes$RegionEqualsNode): boolean;
}