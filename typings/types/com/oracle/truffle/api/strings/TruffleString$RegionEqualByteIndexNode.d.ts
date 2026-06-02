import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
import type { TruffleString$WithMask } from '../../../../../com/oracle/truffle/api/strings/TruffleString$WithMask.d.ts'
export abstract class TruffleString$RegionEqualByteIndexNode extends AbstractPublicNode {
    static create(): TruffleString$RegionEqualByteIndexNode;
    static getUncached(): TruffleString$RegionEqualByteIndexNode;
    constructor()
    execute(a: AbstractTruffleString, fromByteIndexA: number, b: AbstractTruffleString, fromByteIndexB: number, length: number, expectedEncoding: TruffleString$Encoding): boolean;
    execute(a: AbstractTruffleString, fromIndexA: number, b: AbstractTruffleString, fromIndexB: number, length: number, mask: number[], expectedEncoding: TruffleString$Encoding): boolean;
    execute(a: AbstractTruffleString, fromByteIndexA: number, b: TruffleString$WithMask, fromByteIndexB: number, length: number, expectedEncoding: TruffleString$Encoding): boolean;
    regionEquals(a: AbstractTruffleString, byteFromIndexA: number, b: AbstractTruffleString, byteFromIndexB: number, byteLength: number, mask: number[], expectedEncoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, managedProfileB: InlinedConditionProfile, nativeProfileB: InlinedConditionProfile): boolean;
}