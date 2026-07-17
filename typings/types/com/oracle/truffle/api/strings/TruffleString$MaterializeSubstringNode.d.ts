import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TStringInternalNodes$FromBufferWithStringCompactionKnownAttributesNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$FromBufferWithStringCompactionKnownAttributesNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$MaterializeSubstringNode extends AbstractPublicNode {
    static create(): TruffleString$MaterializeSubstringNode;
    static getUncached(): TruffleString$MaterializeSubstringNode;
    constructor()
    doMutableTruffleString(a: MutableTruffleString, expectedEncoding: TruffleString$Encoding, fromBufferWithStringCompactionNode: TStringInternalNodes$FromBufferWithStringCompactionKnownAttributesNode): TruffleString;
    doTruffleString(a: TruffleString, expectedEncoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, stringViewProfile: InlinedConditionProfile): TruffleString;
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): TruffleString;
}