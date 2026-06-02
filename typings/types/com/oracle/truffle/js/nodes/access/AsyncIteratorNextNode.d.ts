import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { AbstractAwaitNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractAwaitNode.d.ts'
import type { ResumableNode$WithIntState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithIntState.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncIteratorNextNode extends AbstractAwaitNode implements ResumableNode$WithIntState {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, paramstateSlot: number, paramiterator: JavaScriptNode, paramasyncContextNode: JSReadFrameSlotNode, paramasyncResultNode: JSReadFrameSlotNode): JavaScriptNode;
    static findAsyncStackFramesFromHandler(paramhandlerFunction: JSFunctionObject, paramargument: Object): TruffleStackTraceElement[];
    static findAsyncStackFramesFromPromise(parampromise: JSDynamicObject): TruffleStackTraceElement[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, stateSlot: number, iterator: JavaScriptNode, asyncContextNode: JSReadFrameSlotNode, asyncResultNode: JSReadFrameSlotNode)
    // private errorBranch: BranchProfile;
    // private isObjectNode: IsObjectNode;
    // private methodCallNode: JSFunctionCallNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    // private executeBegin(frame: VirtualFrame): Object;
    getStateAsInt(frame: VirtualFrame, stateSlot: number): number;
    getStateAsIntAndReset(frame: VirtualFrame, stateSlot: number): number;
    getStateSlotKind(): FrameSlotKind;
    setStateAsInt(frame: VirtualFrame, stateSlot: number, state: number): void;
}