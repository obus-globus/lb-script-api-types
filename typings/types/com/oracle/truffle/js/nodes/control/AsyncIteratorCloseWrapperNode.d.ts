import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { AbstractAwaitNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractAwaitNode.d.ts'
import type { ResumableNode$WithObjectState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithObjectState.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncIteratorCloseWrapperNode extends AbstractAwaitNode implements ResumableNode$WithObjectState {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, paramstateSlot: number, paramloopNode: JavaScriptNode, paramiterator: JavaScriptNode, paramasyncContextNode: JSReadFrameSlotNode, paramasyncResultNode: JSReadFrameSlotNode): JavaScriptNode;
    static findAsyncStackFramesFromHandler(paramhandlerFunction: JSFunctionObject, paramargument: Object): TruffleStackTraceElement[];
    static findAsyncStackFramesFromPromise(parampromise: JSDynamicObject): TruffleStackTraceElement[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, stateSlot: number, loopNode: JavaScriptNode, iteratorNode: JavaScriptNode, asyncContextNode: JSReadFrameSlotNode, asyncResultNode: JSReadFrameSlotNode)
    // private errorBranch: BranchProfile;
    // private exitBranch: BranchProfile;
    // private getReturnNode: GetMethodNode;
    // private isObjectNode: IsObjectNode;
    // private iteratorNode: JavaScriptNode;
    // private loopNode: JavaScriptNode;
    // private returnMethodCallNode: JSFunctionCallNode;
    // private throwBranch: BranchProfile;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    // private executeBegin(frame: VirtualFrame): Object;
    // private getIteratorRecord(frame: VirtualFrame): IteratorRecord;
    // private getReturnMethodCallNode(): JSFunctionCallNode;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}