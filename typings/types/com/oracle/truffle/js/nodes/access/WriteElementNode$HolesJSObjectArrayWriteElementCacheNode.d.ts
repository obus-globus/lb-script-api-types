import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$RecursiveCachedArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$RecursiveCachedArrayWriteElementCacheNode.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { HolesJSObjectArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesJSObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$HolesJSObjectArrayWriteElementCacheNode extends WriteElementNode$RecursiveCachedArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private containsHoles(target: JSDynamicObject, holesJSObjectArray: HolesJSObjectArray, index: number, hasExplicitHolesIf: InlinedConditionProfile): boolean;
    doJSObjectArray(target: JSDynamicObject, holesArray: HolesJSObjectArray, index: number, value: Object, root: WriteElementNode, jsObjectValueBranch: InlinedBranchProfile, objectValueBranch: InlinedBranchProfile, inBoundsFastIf: InlinedConditionProfile, inBoundsIf: InlinedConditionProfile, containsHolesIf: InlinedConditionProfile, inBoundsFastHoleIf: InlinedConditionProfile, supportedContainsHolesIf: InlinedConditionProfile, supportedNotContainsHolesIf: InlinedConditionProfile, hasExplicitHolesIf: InlinedConditionProfile, needPrototypeBranch: InlinedBranchProfile, setSupportedProfile: AbstractWritableArray$SetSupportedProfileAccess): boolean;
    // private executeWithJSObjectValueInner(target: JSDynamicObject, jsobjectArray: HolesJSObjectArray, index: number, value: JSDynamicObject, root: WriteElementNode, inBoundsFastIf: InlinedConditionProfile, inBoundsIf: InlinedConditionProfile, containsHolesIf: InlinedConditionProfile, inBoundsFastHoleIf: InlinedConditionProfile, supportedContainsHolesIf: InlinedConditionProfile, supportedNotContainsHolesIf: InlinedConditionProfile, hasExplicitHolesIf: InlinedConditionProfile, needPrototypeBranch: InlinedBranchProfile, setSupportedProfile: AbstractWritableArray$SetSupportedProfileAccess): boolean;
}