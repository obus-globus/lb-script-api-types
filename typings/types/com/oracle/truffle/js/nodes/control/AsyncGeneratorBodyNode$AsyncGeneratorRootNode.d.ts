import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { AsyncGeneratorRejectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorRejectNode.d.ts'
import type { AsyncGeneratorResolveNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorResolveNode.d.ts'
import type { AsyncGeneratorResumeNextNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorResumeNextNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { AbstractFunctionRootNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionRootNode.d.ts'
import type { AsyncRootNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/AsyncRootNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorBodyNode$AsyncGeneratorRootNode extends AbstractFunctionRootNode implements AsyncRootNode {
    static ASYNC_FRAME_INDEX: number;
    static CALL_TARGET_INDEX: number;
    static GENERATOR_OBJECT_OR_PROMISE_CAPABILITY_INDEX: number;
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static STACK_TRACE_INDEX: number;
    static createAsyncContext(paramresumeTarget: CallTarget, paramgeneratorObjectOrPromiseCapability: Object, paramasyncFrame: MaterializedFrame): (Object | null)[];
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext, functionBody: JavaScriptNode, writeYieldValueNode: JSWriteFrameSlotNode, readYieldResultNode: JSReadFrameSlotNode, readAsyncContext: JSReadFrameSlotNode, functionSourceSection: SourceSection, functionName: TruffleString, activeScriptOrModule: ScriptOrModule)
    // private asyncGeneratorRejectNode: AsyncGeneratorRejectNode;
    // private asyncGeneratorResolveNode: AsyncGeneratorResolveNode;
    // private asyncGeneratorResumeNextNode: AsyncGeneratorResumeNextNode;
    // private context: JSContext;
    // private functionBody: JavaScriptNode;
    // private functionName: TruffleString;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private readAsyncContext: JSReadFrameSlotNode;
    // private readYieldResult: JSReadFrameSlotNode;
    // private writeYieldValue: JSWriteFrameSlotNode;
    // private asyncGeneratorReject(generatorObject: JSAsyncGeneratorObject, ex: AbstractTruffleException): void;
    executeInRealm(frame: VirtualFrame): Object;
    findAsynchronousFrames(frame: Frame): TruffleStackTraceElement[];
    getAsyncFunctionPromise(asyncFrame: Frame, generatorObject: Object): JSDynamicObject;
    getName(): string;
    getSavedStackTrace(asyncFrame: Frame): TruffleStackTraceElement[];
    isResumption(): boolean;
    toString(): string;
}