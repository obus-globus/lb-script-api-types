import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSGetOwnPropertyNode$GetPropertyProxyValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode$GetPropertyProxyValueNode.d.ts'
import type { JSGetOwnPropertyNodeGen$GetPropertyProxyValueNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNodeGen$GetPropertyProxyValueNodeGen$CachedData.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSGetOwnPropertyNodeGen$GetPropertyProxyValueNodeGen extends JSGetOwnPropertyNode$GetPropertyProxyValueNode {
    static create(): JSGetOwnPropertyNode$GetPropertyProxyValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cached_cache: JSGetOwnPropertyNodeGen$GetPropertyProxyValueNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: Object): Object;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object): Object;
}