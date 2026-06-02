import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { DirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { SpecializedNewObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SpecializedNewObjectNode.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSOrdinary } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOrdinary.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ConstructorRootNode extends JavaScriptRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static create(paramfunctionData: JSFunctionData, paramcallTarget: CallTarget, paramnewTarget: boolean): ConstructorRootNode;
    static create(paramfunctionData: JSFunctionData, paramcallTarget: CallTarget, paramnewTarget: boolean, paraminstanceLayout: JSOrdinary): ConstructorRootNode;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(functionData: JSFunctionData, callTarget: CallTarget, newTarget: boolean, instanceLayout: JSOrdinary)
    readonly callTarget: CallTarget;
    // private functionData: JSFunctionData;
    // private instanceLayout: JSOrdinary;
    // private newTarget: boolean;
    // private allocateThisObject(frame: VirtualFrame, arguments: Object[], newObjectNode: SpecializedNewObjectNode): Object;
    cloneUninitialized(): JavaScriptRootNode;
    construct(frame: VirtualFrame, callNode: DirectCallNode, newObjectNode: SpecializedNewObjectNode, isObjectNode: IsObjectNode, isObjectProfile: InlinedConditionProfile): Object;
    // private filterConstructorResult(thisObject: Object, result: Object, isObjectNode: IsObjectNode, isObject: InlinedConditionProfile): Object;
    // private getFunctionData(): JSFunctionData;
    isCloneUninitializedSupported(): boolean;
    isCloningAllowed(): boolean;
    isInternal(): boolean;
    toString(): string;
}