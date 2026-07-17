import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { FrameDescriptorProvider } from '../../../../../../com/oracle/truffle/js/nodes/FrameDescriptorProvider.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractBodyNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractBodyNode.d.ts'
import type { AbstractFunctionRootNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionRootNode.d.ts'
import type { JavaScriptRootNode } from '../../../../../../com/oracle/truffle/js/runtime/JavaScriptRootNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionData$CallTargetInitializer } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData$CallTargetInitializer.d.ts'
import type { JSFunctionData$Target } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData$Target.d.ts'
import type { ScriptOrModule } from '../../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FunctionRootNode extends AbstractFunctionRootNode implements FrameDescriptorProvider, JSFunctionData$CallTargetInitializer {
    static MODULE_DUMMY_FRAMEDESCRIPTOR: FrameDescriptor;
    static create(parambody: AbstractBodyNode, paramframeDescriptor: FrameDescriptor, paramfunctionData: JSFunctionData, paramsourceSection: SourceSection, paramactiveScriptOrModule: ScriptOrModule, paraminternalFunctionName: TruffleString): FunctionRootNode;
    static createConstantNode(paramconstant: Object): RootNode;
    static findAsynchronousFrames(paramrootNode: JavaScriptRootNode, paramframe: Frame): TruffleStackTraceElement[];
    static setOmitFromStackTrace(paramuntil: JSFunctionData): void;
    constructor(body: AbstractBodyNode, frameDescriptor: FrameDescriptor, functionData: JSFunctionData, sourceSection: SourceSection, activeScriptOrModule: ScriptOrModule, internalFunctionName: TruffleString)
    readonly body: JavaScriptNode;
    readonly functionData: JSFunctionData;
    // private internalFunctionName: TruffleString;
    cloneUninitialized(): JavaScriptRootNode;
    countsTowardsStackTraceLimit(): boolean;
    executeInRealm(frame: VirtualFrame): Object;
    getBody(): JavaScriptNode;
    getDebugProperties(): JavaMap<string, Object>;
    getFunctionData(): JSFunctionData;
    getName(): string;
    getNameTString(): TruffleString;
    getParamCount(): number;
    initializeCallTarget(fd: JSFunctionData, target: JSFunctionData$Target, rootTarget: CallTarget): void;
    initializeCallTargets(functionData: JSFunctionData): void;
    initializeRoot(functionData: JSFunctionData): void;
    isCloneUninitializedSupported(): boolean;
    isCloningAllowed(): boolean;
    isFunction(): boolean;
    isInlineImmediately(): boolean;
    isSplitImmediately(): boolean;
    toString(): string;
}