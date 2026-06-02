import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TStringInternalNodes$ReadByteNode } from '../../../../../com/oracle/truffle/api/strings/TStringInternalNodes$ReadByteNode.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$ReadByteNode extends AbstractPublicNode {
    static create(): TruffleString$ReadByteNode;
    static getUncached(): TruffleString$ReadByteNode;
    constructor()
    doRead(a: AbstractTruffleString, i: number, expectedEncoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile, readByteNode: TStringInternalNodes$ReadByteNode): number;
    execute(a: AbstractTruffleString, byteIndex: number, expectedEncoding: TruffleString$Encoding): number;
}