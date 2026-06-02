import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { JSReadFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSReadFrameSlotNode.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { AbstractFunctionRootNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionRootNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSFunction$GeneratorState } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunction$GeneratorState.d.ts'
import type { JSGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSGeneratorObject.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GeneratorBodyNode$GeneratorRootNode extends AbstractFunctionRootNode {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    constructor(context: JSContext, functionBody: JavaScriptNode, writeYieldValueNode: JSWriteFrameSlotNode, readYieldResultNode: JSReadFrameSlotNode, functionSourceSection: SourceSection, functionName: TruffleString, activeScriptOrModule: ScriptOrModule)
    // private createIterResultObject: CreateIterResultObjectNode;
    // private errorBranch: BranchProfile;
    // private functionBody: JavaScriptNode;
    // private functionName: TruffleString;
    // private readYieldResult: JSReadFrameSlotNode;
    // private returnOrExceptionProfile: ConditionProfile;
    // private writeYieldValue: JSWriteFrameSlotNode;
    executeInRealm(frame: VirtualFrame): Object;
    // private generatorValidate(generatorObject: JSGeneratorObject): JSFunction$GeneratorState;
    getName(): string;
    isResumption(): boolean;
}