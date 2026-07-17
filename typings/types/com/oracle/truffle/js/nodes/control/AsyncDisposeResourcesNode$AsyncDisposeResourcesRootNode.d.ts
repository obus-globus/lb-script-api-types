import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { AsyncDisposeResourcesNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncDisposeResourcesNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncDisposeResourcesNode$AsyncDisposeResourcesRootNode extends JavaScriptRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    private constructor(context: JSContext, rejected: boolean)
    // private asyncDisposeResourcesNode: AsyncDisposeResourcesNode;
    // private getCapability: PropertyGetNode;
    // private getError: PropertyGetNode;
    // private getHasAwaited: PropertyGetNode;
    // private getNeedsAwait: PropertyGetNode;
    // private getPromiseCapability: PropertyGetNode;
    // private rejected: boolean;
    // private valueNode: JavaScriptNode;
    execute(frame: VirtualFrame): Object;
}