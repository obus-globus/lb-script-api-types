import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { AsyncHandlerRootNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/AsyncHandlerRootNode.d.ts'
import type { AsyncHandlerRootNode$AsyncStackTraceInfo } from '../../../../../../com/oracle/truffle/js/nodes/promise/AsyncHandlerRootNode$AsyncStackTraceInfo.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncIteratorCloseNode$AsyncIteratorCloseRootNode extends JavaScriptRootNode implements AsyncHandlerRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext, isAbrupt: boolean)
    // private getCompletionNode: PropertyGetNode;
    // private isAbrupt: boolean;
    // private isObjectNode: IsObjectNode;
    // private valueNode: JavaScriptNode;
    execute(frame: VirtualFrame): Object;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject): AsyncHandlerRootNode$AsyncStackTraceInfo;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject, argument: Object): AsyncHandlerRootNode$AsyncStackTraceInfo;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject): AsyncHandlerRootNode$AsyncStackTraceInfo;
    getAsyncStackTraceInfo(handlerFunction: JSFunctionObject, argument: Object): AsyncHandlerRootNode$AsyncStackTraceInfo;
}