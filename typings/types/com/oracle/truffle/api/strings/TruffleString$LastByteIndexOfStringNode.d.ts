import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringOpsNodes$RawLastIndexOfStringNode } from '../../../../../com/oracle/truffle/api/strings/TStringOpsNodes$RawLastIndexOfStringNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$WithMask } from '../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
export abstract class TruffleString$LastByteIndexOfStringNode extends AbstractPublicNode {
    static create(): TruffleString$LastByteIndexOfStringNode;
    static getUncached(): TruffleString$LastByteIndexOfStringNode;
    constructor()
    execute(a: AbstractTruffleString, b: AbstractTruffleString, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, b: AbstractTruffleString, fromIndex: number, toIndex: number, mask: number[], expectedEncoding: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, b: TruffleString$WithMask, fromIndex: number, toIndex: number, expectedEncoding: TruffleString$Encoding): number;
    lastByteIndexOfString(a: AbstractTruffleString, b: AbstractTruffleString, fromIndexB: number, toIndexB: number, mask: number[], encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile, impreciseAProfile: InlinedConditionProfile, impreciseBProfile: InlinedConditionProfile, indexOfStringNode: TStringOpsNodes$RawLastIndexOfStringNode): number;
}