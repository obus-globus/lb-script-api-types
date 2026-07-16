import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$RecursiveCachedArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$RecursiveCachedArrayWriteElementCacheNode.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$ConstantArrayWriteElementCacheNode extends WriteElementNode$RecursiveCachedArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doConstantArray(target: JSDynamicObject, constantArray: AbstractConstantArray, index: number, value: Object, root: WriteElementNode, intValueBranch: InlinedBranchProfile, doubleValueBranch: InlinedBranchProfile, jsObjectValueBranch: InlinedBranchProfile, objectValueBranch: InlinedBranchProfile, inBoundsIf: InlinedConditionProfile, createWritableProfile: ScriptArray$CreateWritableProfileAccess): boolean;
}