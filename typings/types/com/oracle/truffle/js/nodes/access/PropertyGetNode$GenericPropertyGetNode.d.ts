import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$ForeignPropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$ForeignPropertyGetNode.d.ts'
import type { PropertyGetNode$GetCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$GetCacheNode.d.ts'
import type { PropertyGetNode$GetPropertyFromJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$GetPropertyFromJSObjectNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode$GenericPropertyGetNode extends PropertyGetNode$GetCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private fallbackBranch: BranchProfile;
    // private foreignGetNode: PropertyGetNode$ForeignPropertyGetNode;
    // private getFromJSObjectNode: PropertyGetNode$GetPropertyFromJSObjectNode;
    // private isForeignObject: ConditionProfile;
    // private isJSObject: ConditionProfile;
    // private notAJSObjectBranch: BranchProfile;
    // private toObjectNode: JSToObjectNode;
    getFallback(defaultValue: Object, root: PropertyGetNode): Object;
    // private getPropertyFromJSObject(thisObj: JSDynamicObject, receiver: Object, defaultValue: Object, root: PropertyGetNode): Object;
    getValue(thisObj: Object, receiver: Object, defaultValue: Object, root: PropertyGetNode, guard: boolean): Object;
}