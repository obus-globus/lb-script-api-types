import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { AbstractTruffleString } from '../../../../../com/oracle/truffle/api/strings/AbstractTruffleString.d.ts'
import type { TruffleString$Encoding } from '../../../../../com/oracle/truffle/api/strings/TruffleString$Encoding.d.ts'
export abstract class TruffleString$ByteIndexOfAnyByteNode extends AbstractPublicNode {
    static create(): TruffleString$ByteIndexOfAnyByteNode;
    static getUncached(): TruffleString$ByteIndexOfAnyByteNode;
    constructor()
    execute(a: AbstractTruffleString, fromByteIndex: number, maxByteIndex: number, values: number[], expectedEncoding: TruffleString$Encoding): number;
    indexOfRaw(a: AbstractTruffleString, fromByteIndex: number, maxByteIndex: number, values: number[], expectedEncoding: TruffleString$Encoding, managedProfileA: InlinedConditionProfile, nativeProfileA: InlinedConditionProfile): number;
}