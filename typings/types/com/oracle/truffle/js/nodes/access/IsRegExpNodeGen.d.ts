import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsJSClassNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSClassNode.d.ts'
import type { IsJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { IsRegExpNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsRegExpNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsRegExpNodeGen extends IsRegExpNode {
    static create(paramcontext: JSContext): IsRegExpNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private isObject_isJSRegExpNode_: IsJSClassNode;
    // private isObject_isObjectNode_: IsJSObjectNode;
    // private isObject_toBooleanNode__field1_: Node;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): boolean;
    executeBoolean(arg0Value: Object): boolean;
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
}