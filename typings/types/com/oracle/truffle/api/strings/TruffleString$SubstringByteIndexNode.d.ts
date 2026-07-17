import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$SubstringInternalNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$SubstringInternalNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$SubstringByteIndexNode extends AbstractPublicNode {
    static create(): TruffleString$SubstringByteIndexNode;
    static getUncached(): TruffleString$SubstringByteIndexNode;
    constructor()
    execute(a: AbstractTruffleString, fromByteIndex: number, byteLength: number, expectedEncoding: TruffleString$Encoding, lazy: boolean): TruffleString;
    substringRaw(a: AbstractTruffleString, fromByteIndex: number, byteLength: number, expectedEncoding: TruffleString$Encoding, lazy: boolean, emptyProfile: InlinedConditionProfile, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, substringInternalNode: TStringInternalNodes$SubstringInternalNode): TruffleString;
}