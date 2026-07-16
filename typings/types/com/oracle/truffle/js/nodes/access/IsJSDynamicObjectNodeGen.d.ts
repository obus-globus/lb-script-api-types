import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsJSDynamicObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSDynamicObjectNode.d.ts'
import type { IsJSDynamicObjectNodeGen$IsObjectCachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSDynamicObjectNodeGen$IsObjectCachedData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsJSDynamicObjectNodeGen extends IsJSDynamicObjectNode {
    static create(): IsJSDynamicObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isObjectCached_cache: IsJSDynamicObjectNodeGen$IsObjectCachedData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): boolean;
    executeBoolean(arg0Value: Object): boolean;
}