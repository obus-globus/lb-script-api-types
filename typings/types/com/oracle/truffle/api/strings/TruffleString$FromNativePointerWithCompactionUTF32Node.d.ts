import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { AbstractPublicNode } from '../../../../../com/oracle/truffle/api/strings/AbstractPublicNode.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CompactionLevel } from '../../../../../com/oracle/truffle/api/strings/TruffleString$CompactionLevel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TruffleString$FromNativePointerWithCompactionUTF32Node extends AbstractPublicNode {
    static create(): TruffleString$FromNativePointerWithCompactionUTF32Node;
    static getUncached(): TruffleString$FromNativePointerWithCompactionUTF32Node;
    constructor()
    execute(pointerObject: Object, byteOffset: number, byteLength: number, compactionLevel: TruffleString$CompactionLevel, copy: boolean): TruffleString;
    fromNativePointer(pointerObject: Object, byteOffset: number, byteLength: number, compactionLevel: TruffleString$CompactionLevel, copy: boolean, interopLibrary: Node, rawPointerProfile: InlinedConditionProfile, mustCopyProfile: InlinedConditionProfile): TruffleString;
}