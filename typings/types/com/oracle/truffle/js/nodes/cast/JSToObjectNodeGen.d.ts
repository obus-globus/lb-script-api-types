import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSToObjectNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNodeGen$ForeignObject0Data.d.ts'
import type { JSToObjectNodeGen$JSObjectCachedData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNodeGen$JSObjectCachedData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToObjectNodeGen extends JSToObjectNode {
    static create(): JSToObjectNode;
    static getUncached(): JSToObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private foreignObject0_cache: JSToObjectNodeGen$ForeignObject0Data;
    // private jSObjectCached_cache: JSToObjectNodeGen$JSObjectCachedData;
    // private state_0_: number;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
    // private foreignObject1Boundary(state_0: number, arg0Value: Object): Object;
}