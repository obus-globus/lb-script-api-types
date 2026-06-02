import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { RootCallTarget } from '../../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { ExecutableNode } from '../../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { ExecutionSignature } from '../../../../../com/oracle/truffle/api/nodes/ExecutionSignature.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class RootNode extends ExecutableNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(language: TruffleLanguage<Object>)
    constructor(language: TruffleLanguage<Object>, frameDescriptor: FrameDescriptor)
    readonly callTarget: RootCallTarget;
    readonly frameDescriptor: FrameDescriptor;
    // private instrumentationBits: number;
    // private lock: ReentrantLock;
    cloneUninitialized(): RootNode;
    cloneUninitializedImpl(sourceCallTarget: CallTarget, uninitializedRootNode: RootNode): RootNode;
    computeSize(): number;
    copy(): Node;
    countsTowardsStackTraceLimit(): boolean;
    execute(frame: VirtualFrame): Object;
    findAsynchronousFrames(frame: Frame): TruffleStackTraceElement[];
    findBytecodeIndex(node: Node, frame: Frame): number;
    findInstrumentableCallNode(callNode: Node, frame: Frame, bytecodeIndex: number): Node;
    getCallTarget(): RootCallTarget;
    getCallTargetWithoutInitialization(): RootCallTarget;
    getFrameDescriptor(): FrameDescriptor;
    getLazyLock(): ReentrantLock;
    getName(): string;
    getParentFrameDescriptor(): FrameDescriptor;
    getQualifiedName(): string;
    // private initializeLock(): ReentrantLock;
    // private initializeTarget(): RootCallTarget;
    isCaptureFramesForTrace(): boolean;
    isCaptureFramesForTrace(compiledFrame: Node): boolean;
    isCaptureFramesForTrace(compiledFrame: boolean): boolean;
    isCloneUninitializedSupported(): boolean;
    isCloningAllowed(): boolean;
    isInstrumentable(): boolean;
    isInternal(): boolean;
    isSameFrame(frame1: Frame, frame2: Frame): boolean;
    isTrivial(): boolean;
    // private materializeSourceSection(): SourceSection;
    prepareForAOT(): ExecutionSignature;
    prepareForCall(): void;
    prepareForCompilation(rootCompilation: boolean, compilationTier: number, lastTier: boolean): boolean;
    prepareForInstrumentation(tags: Class<Object>[]): void;
    // private setupCallTarget(callTarget: RootCallTarget, message: string): void;
    translateStackTraceElement(element: TruffleStackTraceElement): Object;
}