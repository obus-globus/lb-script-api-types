import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$IndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$IndexOfCodePointNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$IndexOfCodePointNode extends AbstractPublicNode {
    static create(): TruffleString$IndexOfCodePointNode;
    static getUncached(): TruffleString$IndexOfCodePointNode;
    constructor()
    doIndexOf(a: AbstractTruffleString, codepoint: number, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, calcCodePointLengthProfile: InlinedConditionProfile, impreciseProfile: InlinedConditionProfile, fixedProfile: InlinedConditionProfile, validProfile: InlinedConditionProfile, indexOfNode: TStringInternalNodes$IndexOfCodePointNode): number;
    execute(a: AbstractTruffleString, codepoint: number, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
}