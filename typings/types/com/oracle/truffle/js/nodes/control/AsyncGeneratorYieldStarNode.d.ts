import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetAsyncIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetAsyncIteratorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorNextNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorNextNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { AsyncGeneratorYieldNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorYieldNode.d.ts'
import type { ReturnNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ReturnNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorYieldStarNode extends AsyncGeneratorYieldNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createYield(paramcontext: JSContext, paramstateSlot: number, paramexpression: JavaScriptNode, paramreadAsyncContextNode: JSReadFrameSlotNode, paramreadAsyncResultNode: JSReadFrameSlotNode, paramreturnNode: ReturnNode): AsyncGeneratorYieldNode;
    static createYieldStar(paramcontext: JSContext, paramstateSlot: number, paramexpression: JavaScriptNode, paramreadAsyncContextNode: JSReadFrameSlotNode, paramreadAsyncResultNode: JSReadFrameSlotNode, paramreturnNode: ReturnNode, paramiteratorTempSlot: number): AsyncGeneratorYieldNode;
    static findAsyncStackFramesFromHandler(paramhandlerFunction: JSFunctionObject, paramargument: Object): TruffleStackTraceElement[];
    static findAsyncStackFramesFromPromise(parampromise: JSDynamicObject): TruffleStackTraceElement[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, expression: JavaScriptNode, stateSlot: number, readAsyncContextNode: JSReadFrameSlotNode, readYieldResultNode: JSReadFrameSlotNode, returnNode: ReturnNode, iteratorTempSlot: number)
    // private callReturnNode: JSFunctionCallNode;
    // private callThrowNode: JSFunctionCallNode;
    // private getIteratorNode: GetAsyncIteratorNode;
    // private getReturnMethodNode: GetMethodNode;
    // private getThrowMethodNode: GetMethodNode;
    // private isObjectNode: IsObjectNode;
    // private iteratorCompleteNode: IteratorCompleteNode;
    // private iteratorNextNode: IteratorNextNode;
    // private iteratorTempSlot: number;
    // private iteratorValueNode: IteratorValueNode;
    // private throwMethodMissingBranch: BranchProfile;
    // private awaitWithNext(frame: VirtualFrame, value: Object, nextState: number): void;
    // private callReturnMethod(returnMethod: Object, iterator: Object, received: Object): Object;
    // private callThrowMethod(throwMethod: Object, iterator: Object, received: Object): Object;
    // private checkIterResult(iterResult: Object): Object;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    // private reset(frame: VirtualFrame): void;
    // private yieldWithNext(frame: VirtualFrame, value: Object, nextState: number): Object;
}