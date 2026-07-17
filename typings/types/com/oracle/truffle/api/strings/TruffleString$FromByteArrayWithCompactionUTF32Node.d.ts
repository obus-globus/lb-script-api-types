import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CompactionLevel } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompactionLevel.d.ts'
export abstract class TruffleString$FromByteArrayWithCompactionUTF32Node extends AbstractPublicNode {
    static create(): TruffleString$FromByteArrayWithCompactionUTF32Node;
    static getUncached(): TruffleString$FromByteArrayWithCompactionUTF32Node;
    constructor()
    execute(array: number[], byteOffset: number, byteLength: number, compactionLevel: TruffleString$CompactionLevel, copy: boolean): TruffleString;
    fromByteArray(value: number[], byteOffset: number, byteLength: number, compactionLevel: TruffleString$CompactionLevel, copy: boolean, mustCopyProfile: InlinedConditionProfile): TruffleString;
}