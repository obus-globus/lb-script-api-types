import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AbstractAsyncIteratorGeneratorResumptionRootNode } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AbstractAsyncIteratorGeneratorResumptionRootNode.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AsyncIteratorPrototypeBuiltins$AsyncIteratorYieldResultRootNode extends AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AbstractAsyncIteratorGeneratorResumptionRootNode<AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs> {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext)
    // private callNode: JSFunctionCallNode;
    // private getContinuation: PropertyGetNode;
    // private asyncGeneratorUnwrapYieldResumption(generator: JSAsyncGeneratorObject): Object;
    execute(frame: VirtualFrame): Object;
}