import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ResumableNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode.d.ts'
import type { SuspendNode } from '../../../../../../com/oracle/truffle/js/nodes/control/SuspendNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { PromiseResolveNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PromiseResolveNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractAwaitNode extends JavaScriptNode implements ResumableNode, SuspendNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static findAsyncStackFramesFromHandler(paramhandlerFunction: JSFunctionObject, paramargument: Object): TruffleStackTraceElement[];
    static findAsyncStackFramesFromPromise(parampromise: JSDynamicObject): TruffleStackTraceElement[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, stateSlot: number, expression: JavaScriptNode, readAsyncContextNode: JSReadFrameSlotNode, readAsyncResultNode: JSReadFrameSlotNode)
    // private asyncTypeProf: ConditionProfile;
    // private callPromiseResolveNode: JSFunctionCallNode;
    // private context: JSContext;
    // private expression: JavaScriptNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private performPromiseThenNode: PerformPromiseThenNode;
    // private promiseResolveNode: PromiseResolveNode;
    // private readAsyncContextNode: JSReadFrameSlotNode;
    // private readAsyncResultNode: JSReadFrameSlotNode;
    // private resumptionTypeProf: ConditionProfile;
    // private saveStackBranch: BranchProfile;
    // private setAsyncCallNode: PropertySetNode;
    // private setAsyncContextNode: PropertySetNode;
    // private setAsyncGeneratorNode: PropertySetNode;
    // private setAsyncTargetNode: PropertySetNode;
    // private stateSlot: number;
    asResumableNode(stateSlot: number): JavaScriptNode;
    // private createAwaitFulfilledFunction(resumeTarget: CallTarget, asyncContext: MaterializedFrame, generator: Object): JSFunctionObject;
    // private createAwaitRejectedFunction(resumeTarget: CallTarget, asyncContext: MaterializedFrame, generator: Object): JSFunctionObject;
    echoInput(frame: VirtualFrame, value: Object): void;
    // private fillAsyncStackTrace(frame: VirtualFrame, onFulfilled: JSDynamicObject, onRejected: JSDynamicObject): void;
    getNodeObject(): Object;
    getStateSlotKind(): FrameSlotKind;
    hasTag(tag: Class<Tag>): boolean;
    // private newPromiseCapability(): PromiseCapabilityRecord;
    // private newThrowawayCapability(): PromiseCapabilityRecord;
    // private promiseResolve(value: Object): JSPromiseObject;
    resetState(frame: VirtualFrame, stateSlot: number): void;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    resumeAwait(frame: VirtualFrame): Object;
    suspendAwait(frame: VirtualFrame, value: Object): Object;
}