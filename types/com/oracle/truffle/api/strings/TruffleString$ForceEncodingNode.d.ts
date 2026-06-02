import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TStringInternalNodes$FromBufferWithStringCompactionNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$FromBufferWithStringCompactionNode.d.ts'
import type { TStringInternalNodes$ToIndexableNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$ToIndexableNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$InternalAsTruffleStringNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$InternalAsTruffleStringNode.d.ts'
import type { TruffleString$InternalCopyToByteArrayNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$InternalCopyToByteArrayNode.d.ts'
export abstract class TruffleString$ForceEncodingNode extends AbstractPublicNode {
    static create(): TruffleString$ForceEncodingNode;
    static getUncached(): TruffleString$ForceEncodingNode;
    constructor()
    compatibleMutable(a: MutableTruffleString, expectedEncoding: TruffleString$Encoding, targetEncoding: TruffleString$Encoding, asTruffleStringNode: TruffleString$InternalAsTruffleStringNode): TruffleString;
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, targetEncoding: TruffleString$Encoding): TruffleString;
    reinterpret(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, targetEncoding: TruffleString$Encoding, toIndexableNode: TStringInternalNodes$ToIndexableNode, inflateProfile: InlinedConditionProfile, copyToByteArrayNode: TruffleString$InternalCopyToByteArrayNode, fromBufferWithStringCompactionNode: TStringInternalNodes$FromBufferWithStringCompactionNode): TruffleString;
}