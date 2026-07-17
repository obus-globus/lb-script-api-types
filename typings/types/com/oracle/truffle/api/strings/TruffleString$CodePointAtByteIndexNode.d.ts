import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$ErrorHandling } from '../../../../../com/oracle/truffle/api/strings/TruffleString$ErrorHandling.d.ts'
export abstract class TruffleString$CodePointAtByteIndexNode extends AbstractPublicNode {
    static create(): TruffleString$CodePointAtByteIndexNode;
    static getUncached(): TruffleString$CodePointAtByteIndexNode;
    constructor()
    execute(a: AbstractTruffleString, i: number, expectedEncoding: TruffleString$Encoding): number;
    execute(a: AbstractTruffleString, i: number, expectedEncoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling): number;
    readCodePoint(a: AbstractTruffleString, byteIndex: number, encoding: TruffleString$Encoding, errorHandling: TruffleString$ErrorHandling, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, impreciseProfile: InlinedConditionProfile, fixedProfile: InlinedConditionProfile, stride0Profile: InlinedConditionProfile, validProfile: InlinedConditionProfile): number;
}