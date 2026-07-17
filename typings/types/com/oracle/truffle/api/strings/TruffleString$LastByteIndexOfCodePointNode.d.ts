import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringOpsNodes$RawLastIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TStringOpsNodes$RawLastIndexOfCodePointNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$LastByteIndexOfCodePointNode extends AbstractPublicNode {
    static create(): TruffleString$LastByteIndexOfCodePointNode;
    static getUncached(): TruffleString$LastByteIndexOfCodePointNode;
    constructor()
    doIndexOf(a: AbstractTruffleString, codepoint: number, fromByteIndex: number, toByteIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, impreciseProfile: InlinedConditionProfile, fixedProfile: InlinedConditionProfile, lastIndexOfNode: TStringOpsNodes$RawLastIndexOfCodePointNode): number;
    execute(a: AbstractTruffleString, codepoint: number, fromByteIndex: number, toByteIndex: number, expectedEncoding: TruffleString$Encoding): number;
}