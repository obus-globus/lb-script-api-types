import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSHasPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSHasPropertyNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertyGetNode$GetPropertyFromJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$GetPropertyFromJSObjectNode.d.ts'
import type { PropertyGetNodeFactory$GetPropertyFromJSObjectNodeGen$JSObjectCachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNodeFactory$GetPropertyFromJSObjectNodeGen$JSObjectCachedData.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNodeFactory$GetPropertyFromJSObjectNodeGen extends PropertyGetNode$GetPropertyFromJSObjectNode {
    static create(paramroot: PropertyGetNode): PropertyGetNode$GetPropertyFromJSObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(root: PropertyGetNode)
    // private jSObjectCached_cache: PropertyGetNodeFactory$GetPropertyFromJSObjectNodeGen$JSObjectCachedData;
    // private required_classProfile_: JSClassProfile;
    // private required_hasPropertyNode_: JSHasPropertyNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: PropertyGetNode): Object;
    executeWithJSObject(arg0Value: JSDynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: PropertyGetNode): Object;
}