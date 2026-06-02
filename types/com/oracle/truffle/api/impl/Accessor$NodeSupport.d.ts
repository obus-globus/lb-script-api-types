import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { EncapsulatingNodeReference } from '../../../../../com/oracle/truffle/api/nodes/EncapsulatingNodeReference.d.ts'
import type { ExecutionSignature } from '../../../../../com/oracle/truffle/api/nodes/ExecutionSignature.d.ts'
import type { LanguageInfo } from '../../../../../com/oracle/truffle/api/nodes/LanguageInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$NodeSupport extends Accessor$Support {
    constructor()
    adoptChildrenAndCount(rootNode: RootNode): number;
    applySharingLayer(from: RootNode, to: RootNode): void;
    cloneUninitialized(sourceCallTarget: CallTarget, rootNode: RootNode, uninitializedRootNode: RootNode): RootNode;
    computeSize(rootNode: RootNode): number;
    countsTowardsStackTraceLimit(rootNode: RootNode): boolean;
    createEncapsulatingNodeReference(thread: Thread): EncapsulatingNodeReference;
    createLanguage(cache: Object, id: string, name: string, version: string, defaultMimeType: string, mimeTypes: string[], internal: boolean, interactive: boolean): LanguageInfo;
    findAsynchronousFrames(target: CallTarget, frame: Frame): TruffleStackTraceElement[];
    findBytecodeIndex(rootNode: RootNode, callNode: Node, frame: Frame): number;
    findInstrumentableCallNode(root: RootNode, callNode: Node, frame: Frame, bytecodeIndex: number): Node;
    forceAdoption(parent: Node, child: Node): void;
    getCallTargetWithoutInitialization(root: RootNode): CallTarget;
    getLanguage(languageInfo: RootNode): TruffleLanguage<Object>;
    getLanguageCache(languageInfo: LanguageInfo): Object;
    getLock(node: Node): Lock;
    getParentFrameDescriptor(rootNode: RootNode): FrameDescriptor;
    getRootNodeBits(root: RootNode): number;
    getSharingLayer(rootNode: RootNode): Object;
    isCaptureFramesForTrace(rootNode: RootNode, compiled: boolean): boolean;
    isCloneUninitializedSupported(rootNode: RootNode): boolean;
    isInstrumentable(rootNode: RootNode): boolean;
    isSameFrame(root: RootNode, frame1: Frame, frame2: Frame): boolean;
    isTrivial(rootNode: RootNode): boolean;
    nodeLookup(): MethodHandles$Lookup;
    prepareForAOT(rootNode: RootNode): ExecutionSignature;
    prepareForCompilation(rootNode: RootNode, rootCompilation: boolean, compilationTier: number, lastTier: boolean): boolean;
    prepareForInstrumentation(root: RootNode, tags: Class<Object>[]): void;
    setRootNodeBits(root: RootNode, bits: number): void;
    setSharingLayer(rootNode: RootNode, engine: Object): void;
    translateStackTraceElement(stackTraceLement: TruffleStackTraceElement): Object;
}