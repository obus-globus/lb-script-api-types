import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSPrepareThisNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSPrepareThisNode.d.ts'
import type { JSPrepareThisNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSPrepareThisNodeGen$ForeignObject0Data.d.ts'
import type { JSPrepareThisNodeGen$JSObjectCachedData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSPrepareThisNodeGen$JSObjectCachedData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSPrepareThisNodeGen extends JSPrepareThisNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramchild: JavaScriptNode): JSPrepareThisNode;
    static createPrepareThisBinding(paramcontext: JSContext, paramchild: JavaScriptNode): JSPrepareThisNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, child: JavaScriptNode)
    // private foreignObject0_cache: JSPrepareThisNodeGen$ForeignObject0Data;
    // private jSObjectCached_cache: JSPrepareThisNodeGen$JSObjectCachedData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_boolean0(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_double2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic3(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int1(state_0__: number, frameValue: VirtualFrame): Object;
    // private foreignObject1Boundary(state_0: number, operandNodeValue_: Object): Object;
}