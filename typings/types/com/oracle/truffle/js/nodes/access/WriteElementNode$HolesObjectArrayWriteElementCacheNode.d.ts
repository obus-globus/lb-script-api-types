import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$RecursiveCachedArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$RecursiveCachedArrayWriteElementCacheNode.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { HolesObjectArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$HolesObjectArrayWriteElementCacheNode extends WriteElementNode$RecursiveCachedArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doHolesObjectArray(target: JSDynamicObject, objectArray: HolesObjectArray, index: number, value: Object, root: WriteElementNode, inBoundsFastIf: InlinedConditionProfile, inBoundsIf: InlinedConditionProfile, inBoundsFastHoleIf: InlinedConditionProfile, supportedIf: InlinedConditionProfile, needPrototypeBranch: InlinedBranchProfile, setSupportedProfile: AbstractWritableArray$SetSupportedProfileAccess): boolean;
}