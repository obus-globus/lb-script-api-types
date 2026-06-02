import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorGeneratorAwaitResumptionRootNode } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorGeneratorAwaitResumptionRootNode.d.ts'
import type { GetMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsJSObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AsyncIteratorPrototypeBuiltins$AsyncIteratorUnwrapYieldResumptionRootNode<T extends AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs> extends AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorGeneratorAwaitResumptionRootNode<T> {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext, closeResumption: boolean)
    // private awaitReturnResult: AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode<AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs>;
    // private callReturnNode: JSFunctionCallNode;
    // private getReturnNode: GetMethodNode;
    // private isObjectNode: IsJSObjectNode;
    callReturn(iterator: Object, returnMethod: Object): Object;
    executeBody(frame: VirtualFrame): Object;
}