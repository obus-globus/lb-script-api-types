import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { DirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { ConstructorRootNode } from '../../../../../../com/oracle/truffle/js/nodes/function/ConstructorRootNode.d.ts'
import type { SpecializedNewObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SpecializedNewObjectNode.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSOrdinary } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOrdinary.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConstructorRootNodeGen extends ConstructorRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static create(paramfunctionData: JSFunctionData, paramcallTarget: CallTarget, paramnewTarget: boolean): ConstructorRootNode;
    static create(paramfunctionData: JSFunctionData, paramcallTarget: CallTarget, paramnewTarget: boolean, paraminstanceLayout: JSOrdinary): ConstructorRootNode;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    private constructor(functionData: JSFunctionData, callTarget: CallTarget, newTarget: boolean, instanceLayout: JSOrdinary)
    // private callNode_: DirectCallNode;
    // private isObjectNode_: IsObjectNode;
    // private newObjectNode_: SpecializedNewObjectNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame): Object;
}