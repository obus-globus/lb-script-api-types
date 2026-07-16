import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IteratorCloseNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorNextNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorNextNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { AbstractYieldNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractYieldNode.d.ts'
import type { ResumableNode$WithObjectState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithObjectState.d.ts'
import type { ReturnNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ReturnNode.d.ts'
import type { YieldResultNode } from '../../../../../../com/oracle/truffle/js/nodes/control/YieldResultNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class YieldStarNode extends AbstractYieldNode implements ResumableNode$WithObjectState {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, stateSlot: number, expression: JavaScriptNode, yieldValue: JavaScriptNode, returnNode: ReturnNode, yieldResultNode: YieldResultNode)
    // private callReturnNode: JSFunctionCallNode;
    // private callThrowNode: JSFunctionCallNode;
    // private errorBranch: BranchProfile;
    // private getIteratorNode: GetIteratorNode;
    // private getReturnMethodNode: GetMethodNode;
    // private getThrowMethodNode: GetMethodNode;
    // private isObjectNode: IsObjectNode;
    // private iteratorCloseNode: IteratorCloseNode;
    // private iteratorCompleteNode: IteratorCompleteNode;
    // private iteratorNextNode: IteratorNextNode;
    // private iteratorValueNode: IteratorValueNode;
    // private callReturnMethod(iterator: Object, received: Object, returnMethod: Object): Object;
    // private callThrowMethod(iterator: Object, received: Object, throwMethod: Object): Object;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    // private executeBegin(frame: VirtualFrame): Object;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    // private resumeReturn(frame: VirtualFrame, iteratorRecord: IteratorRecord, received: Object): Object;
    // private resumeThrow(frame: VirtualFrame, iteratorRecord: IteratorRecord, received: Object): Object;
    // private saveStateAndYield(frame: VirtualFrame, iteratorRecord: IteratorRecord, innerResult: Object): Object;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}