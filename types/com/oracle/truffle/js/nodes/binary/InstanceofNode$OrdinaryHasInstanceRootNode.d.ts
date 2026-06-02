import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { InstanceofNode$OrdinaryHasInstanceNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/InstanceofNode$OrdinaryHasInstanceNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InstanceofNode$OrdinaryHasInstanceRootNode extends JavaScriptRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext)
    // private ordinaryHasInstanceNode: InstanceofNode$OrdinaryHasInstanceNode;
    execute(frame: VirtualFrame): Object;
    isInternal(): boolean;
}