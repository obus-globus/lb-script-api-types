import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$LastIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$LastIndexOfStringNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$LastIndexOfStringNode extends AbstractPublicNode {
    static create(): TruffleString$LastIndexOfStringNode;
    static getUncached(): TruffleString$LastIndexOfStringNode;
    constructor()
    execute(a: AbstractTruffleString, b: AbstractTruffleString, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    lastIndexOfString(a: AbstractTruffleString, b: AbstractTruffleString, fromIndex: number, toIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile, calcCodePointLengthAProfile: InlinedConditionProfile, calcCodePointLengthBProfile: InlinedConditionProfile, impreciseAProfile: InlinedConditionProfile, impreciseBProfile: InlinedConditionProfile, indexOfStringNode: TStringInternalNodes$LastIndexOfStringNode): number;
}