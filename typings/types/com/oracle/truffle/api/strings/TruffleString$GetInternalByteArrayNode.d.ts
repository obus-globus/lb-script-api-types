import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { InternalByteArray } from '../../../../../com/oracle/truffle/api/strings/InternalByteArray.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$GetInternalByteArrayNode extends AbstractPublicNode {
    static create(): TruffleString$GetInternalByteArrayNode;
    static getUncached(): TruffleString$GetInternalByteArrayNode;
    constructor()
    execute(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding): InternalByteArray;
    getInternalByteArray(a: AbstractTruffleString, expectedEncoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, utf16Profile: InlinedConditionProfile, utf16S0Profile: InlinedConditionProfile, utf32Profile: InlinedConditionProfile, utf32S0Profile: InlinedConditionProfile, utf32S1Profile: InlinedConditionProfile, isByteArrayProfile: InlinedConditionProfile): InternalByteArray;
    // private inflate(a: AbstractTruffleString, dataA: number[], offsetA: number, strideA: number, strideB: number): InternalByteArray;
}