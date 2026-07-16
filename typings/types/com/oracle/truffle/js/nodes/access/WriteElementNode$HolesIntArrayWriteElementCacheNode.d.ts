import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$RecursiveCachedArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$RecursiveCachedArrayWriteElementCacheNode.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { HolesIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesIntArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$HolesIntArrayWriteElementCacheNode extends WriteElementNode$RecursiveCachedArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private containsHoles(target: JSDynamicObject, holesIntArray: HolesIntArray, index: number, hasExplicitHolesIf: InlinedConditionProfile): boolean;
    doHolesIntArray(target: JSDynamicObject, holesIntArray: HolesIntArray, index: number, value: Object, root: WriteElementNode, intValueBranch: InlinedBranchProfile, doubleValueBranch: InlinedBranchProfile, objectValueBranch: InlinedBranchProfile, inBoundsFastIf: InlinedConditionProfile, inBoundsIf: InlinedConditionProfile, containsHolesIf: InlinedConditionProfile, inBoundsFastHoleIf: InlinedConditionProfile, supportedContainsHolesIf: InlinedConditionProfile, supportedNotContainsHolesIf: InlinedConditionProfile, hasExplicitHolesIf: InlinedConditionProfile, needPrototypeBranch: InlinedBranchProfile, setSupportedProfile: AbstractWritableArray$SetSupportedProfileAccess): boolean;
    // private executeWithIntValueInner(target: JSDynamicObject, holesIntArray: HolesIntArray, index: number, intValue: number, root: WriteElementNode, inBoundsFastIf: InlinedConditionProfile, inBoundsIf: InlinedConditionProfile, containsHolesIf: InlinedConditionProfile, inBoundsFastHoleIf: InlinedConditionProfile, supportedContainsHolesIf: InlinedConditionProfile, supportedNotContainsHolesIf: InlinedConditionProfile, hasExplicitHolesIf: InlinedConditionProfile, needPrototypeBranch: InlinedBranchProfile, setSupportedProfile: AbstractWritableArray$SetSupportedProfileAccess): boolean;
}