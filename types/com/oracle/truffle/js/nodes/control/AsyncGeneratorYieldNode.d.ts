import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { AbstractAwaitNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractAwaitNode.d.ts'
import type { ResumableNode$WithIntState } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode$WithIntState.d.ts'
import type { ReturnNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ReturnNode.d.ts'
import type { YieldResultNode } from '../../../../../../com/oracle/truffle/js/nodes/control/YieldResultNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Completion } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorYieldNode extends AbstractAwaitNode implements ResumableNode$WithIntState {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
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
    constructor(context: JSContext, stateSlot: number, expression: JavaScriptNode, readAsyncContextNode: JSReadFrameSlotNode, readYieldResultNode: JSReadFrameSlotNode, returnNode: ReturnNode)
    // private generatorYieldNode: YieldResultNode;
    // private returnNode: ReturnNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    getStateAsInt(frame: VirtualFrame, stateSlot: number): number;
    getStateAsIntAndReset(frame: VirtualFrame, stateSlot: number): number;
    getStateSlotKind(): FrameSlotKind;
    resumeYield(frame: VirtualFrame): Completion;
    returnValue(frame: VirtualFrame, value: Object): Object;
    setStateAsInt(frame: VirtualFrame, stateSlot: number, state: number): void;
    suspendYield(frame: VirtualFrame, awaited: Object): Object;
}