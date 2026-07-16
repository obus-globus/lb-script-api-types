import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { IsJSObjectNodeGen$IsObjectCachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNodeGen$IsObjectCachedData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsJSObjectNodeGen extends IsJSObjectNode {
    static create(): IsJSObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isObjectCached_cache: IsJSObjectNodeGen$IsObjectCachedData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): boolean;
    executeBoolean(arg0Value: Object): boolean;
}