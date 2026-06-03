import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { LongToIntOrDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/LongToIntOrDoubleNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { AsyncHandlerRootNode } from '../../../../../com/oracle/truffle/js/nodes/promise/AsyncHandlerRootNode.d.ts'
import type { AsyncHandlerRootNode$AsyncStackTraceInfo } from '../../../../../com/oracle/truffle/js/nodes/promise/AsyncHandlerRootNode$AsyncStackTraceInfo.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorRootNode<T extends Object | number | string | boolean> extends JavaScriptRootNode implements AsyncHandlerRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext)
    // private callNode: JSFunctionCallNode;
    // private context: JSContext;
    // private getArgsNode: PropertyGetNode;
    // private getThisNode: PropertyGetNode;
    // private indexToNumber: LongToIntOrDoubleNode;
    // private valueNode: JavaScriptNode;
    callReject(promiseCapability: PromiseCapabilityRecord, resultValue: Object): void;
    callResolve(promiseCapability: PromiseCapabilityRecord, resultValue: Object): void;
    // private callResolveOrReject(promise: JSDynamicObject, resolveOrReject: Object, resultValue: Object): void;
    getArgs(frame: VirtualFrame): T;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject): AsyncHandlerRootNode$AsyncStackTraceInfo;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject, argument: Object): AsyncHandlerRootNode$AsyncStackTraceInfo;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject): AsyncHandlerRootNode$AsyncStackTraceInfo;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject, argument: Object): AsyncHandlerRootNode$AsyncStackTraceInfo;
    getThis(frame: VirtualFrame): JSAsyncGeneratorObject;
    indexToJS(index: number): Object;
}