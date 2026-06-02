import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode.d.ts'
import type { ReturnNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ReturnNode.d.ts'
import type { SuspendNode } from '../../../../../../com/oracle/truffle/js/nodes/control/SuspendNode.d.ts'
import type { YieldResultNode } from '../../../../../../com/oracle/truffle/js/nodes/control/YieldResultNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractYieldNode extends JavaScriptNode implements ResumableNode, SuspendNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createResumableNode(paramnode: ResumableNode, paramstateSlot: number): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, stateSlot: number, expression: JavaScriptNode, yieldValue: JavaScriptNode, returnNode: ReturnNode, yieldResultNode: YieldResultNode)
    // private context: JSContext;
    // private expression: JavaScriptNode;
    // private generatorYieldNode: YieldResultNode;
    // private returnNode: ReturnNode;
    // private returnOrExceptionProfile: ConditionProfile;
    // private stateSlot: number;
    // private yieldValue: JavaScriptNode;
    asResumableNode(stateSlot: number): JavaScriptNode;
    generatorYield(frame: VirtualFrame, iterNextObj: Object): Object;
    getStateSlotKind(): FrameSlotKind;
    resetState(frame: VirtualFrame, stateSlot: number): void;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    returnValue(frame: VirtualFrame, value: Object): Object;
    throwValue(value: Object): Object;
}