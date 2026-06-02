import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { MutableTruffleString } from '../../../../../com/oracle/truffle/api/strings/MutableTruffleString.d.ts'
import type { TStringInternalNodes$FromBufferWithStringCompactionKnownAttributesNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$FromBufferWithStringCompactionKnownAttributesNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$AsManagedNode extends AbstractPublicNode {
    static create(): TruffleString$AsManagedNode;
    static getUncached(): TruffleString$AsManagedNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): TruffleString;
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, cacheResult: boolean): TruffleString;
    mutable(a: MutableTruffleString, expectedEncoding: TruffleString$Encoding, cacheResult: boolean, attributesNode: TStringInternalNodes$FromBufferWithStringCompactionKnownAttributesNode): TruffleString;
    nativeImmutable(a: TruffleString, encoding: TruffleString$Encoding, cacheResult: boolean, cacheHit: InlinedConditionProfile, attributesNode: TStringInternalNodes$FromBufferWithStringCompactionKnownAttributesNode): TruffleString;
}