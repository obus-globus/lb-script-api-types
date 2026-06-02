import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { AbstractTruffleException } from '../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorRootNode } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorRootNode.d.ts'
import type { AsyncGeneratorDrainQueueNode } from '../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorDrainQueueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { AsyncGeneratorRequest } from '../../../../../com/oracle/truffle/js/runtime/objects/AsyncGeneratorRequest.d.ts'
import type { Completion$Type } from '../../../../../com/oracle/truffle/js/runtime/objects/Completion$Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AbstractAsyncIteratorGeneratorResumptionRootNode<T extends AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs> extends AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorRootNode<T> {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext)
    // private asyncGeneratorOpNode: AsyncGeneratorDrainQueueNode;
    asyncGeneratorComplete(frame: VirtualFrame, resultType: Completion$Type, resultValue: Object): Object;
    asyncGeneratorCompleteStep(completionType: Completion$Type, completionValue: Object, done: boolean, queue: AsyncGeneratorRequest[]): void;
    getErrorObject(ex: AbstractTruffleException): Object;
}