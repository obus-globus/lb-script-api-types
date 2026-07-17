import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringOpsNodes$RawIndexOfCodePointNode } from '../../../../../com/oracle/truffle/api/strings/TStringOpsNodes$RawIndexOfCodePointNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$ByteIndexOfCodePointNode extends AbstractPublicNode {
    static create(): TruffleString$ByteIndexOfCodePointNode;
    static getUncached(): TruffleString$ByteIndexOfCodePointNode;
    constructor()
    doIndexOf(a: AbstractTruffleString, codepoint: number, fromByteIndex: number, toByteIndex: number, encoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, impreciseProfile: InlinedConditionProfile, fixedProfile: InlinedConditionProfile, indexOfNode: TStringOpsNodes$RawIndexOfCodePointNode): number;
    execute(a: AbstractTruffleString, codepoint: number, fromByteIndex: number, toByteIndex: number, expectedEncoding: TruffleString$Encoding): number;
}