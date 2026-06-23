import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { RootCallTarget } from '../../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { TruffleLogger } from '../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameExtensions } from '../../../../../com/oracle/truffle/api/frame/FrameExtensions.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { AbstractFastThreadLocal } from '../../../../../com/oracle/truffle/api/impl/AbstractFastThreadLocal.d.ts'
import type { ThreadLocalHandshake } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake.d.ts'
import type { BlockNode } from '../../../../../com/oracle/truffle/api/nodes/BlockNode.d.ts'
import type { BlockNode$ElementExecutor } from '../../../../../com/oracle/truffle/api/nodes/BlockNode$ElementExecutor.d.ts'
import type { BytecodeOSRNode } from '../../../../../com/oracle/truffle/api/nodes/BytecodeOSRNode.d.ts'
import type { DirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { IndirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { OptionDescriptor } from '../../../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionValues } from '../../../../../org/graalvm/options/OptionValues.d.ts'
import type { SandboxPolicy } from '../../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export abstract class Accessor$RuntimeSupport extends Object {
    constructor(permission: Object)
    callInlined(callNode: Node, target: CallTarget, arguments: Object[]): Object;
    callProfiled(target: CallTarget, arguments: Object[]): Object;
    castArrayFixedLength(args: Object[], length: number): Object[];
    createAlwaysValidAssumption(): Assumption;
    createBlockNode<T extends Node>(elements: T[], executor: BlockNode$ElementExecutor<T>): BlockNode<T>;
    createDirectCallNode(target: CallTarget): DirectCallNode;
    createIndirectCallNode(): IndirectCallNode;
    createRuntimeData(engine: Object, engineOptions: OptionValues, loggerFactory: (param0: string) => TruffleLogger, sandboxPolicy: SandboxPolicy): Object;
    createTerminatingThreadLocal<T extends Object | number | string | boolean>(initialValue: () => T, onThreadTermination: (param0: T) => void): ThreadLocal<T>;
    getArrayBaseOffset(componentType: Class<Object>): number;
    getArrayIndexScale(componentType: Class<Object>): number;
    getBaseInstanceSize(type: Class<Object>): number;
    getCallTargetId(target: CallTarget): number;
    getContextThreadLocal(): AbstractFastThreadLocal;
    getFieldOffsets(type: Class<Object>, includePrimitive: boolean, includeSuperclasses: boolean): number[];
    getFrameExtensionsSafe(): FrameExtensions;
    getFrameExtensionsUnsafe(): FrameExtensions;
    getObjectAlignment(): number;
    getRuntimeOptionDescriptors(): OptionDescriptor[];
    getThreadLocalHandshake(): ThreadLocalHandshake;
    initializeProfile(target: CallTarget, argumentTypes: Class<Object>[]): void;
    invalidateCallTarget(target: CallTarget, reason: string): void;
    isGuestCallStackFrame(e: StackTraceElement): boolean;
    isLegacyCompilerOption(key: string): boolean;
    isLoaded(callTarget: CallTarget): boolean;
    isOSRRootNode(rootNode: RootNode): boolean;
    isStoreEnabled(options: OptionValues): boolean;
    newCallTarget(source: CallTarget, rootNode: RootNode): RootCallTarget;
    notifyOnLoad(callTarget: CallTarget): void;
    onEngineClosed(runtimeData: Object): void;
    onEngineClosing(runtimeData: Object): boolean;
    onEngineCreate(engine: Object, runtimeData: Object): void;
    onEnginePatch(runtimeData: Object, runtimeOptions: OptionValues, logSupplier: (param0: string) => TruffleLogger, sandboxPolicy: SandboxPolicy): void;
    onLoopCount(source: Node, iterations: number): void;
    onOSRNodeReplaced(osrNode: BytecodeOSRNode, oldNode: Node, newNode: Node, reason: CharSequence): void;
    onStoreCache(runtimeData: Object, targetPath: Path[], cancelledWord: number): boolean;
    pollBytecodeOSRBackEdge(osrNode: BytecodeOSRNode): boolean;
    pollBytecodeOSRBackEdge(osrNode: BytecodeOSRNode, count: number): boolean;
    reportPolymorphicSpecialize(source: Node): void;
    restoreOSRFrame(osrNode: BytecodeOSRNode, source: Frame, target: Frame): void;
    shutdownCompilationForEngine(engineData: Object): void;
    transferOSRFrame(osrNode: BytecodeOSRNode, source: Frame, target: Frame, bytecodeTarget: number, targetMetadata: Object): void;
    tryBytecodeOSR(osrNode: BytecodeOSRNode, target: number, interpreterState: Object, beforeTransfer: () => void, parentFrame: VirtualFrame): Object;
    tryLoadCachedEngine(runtimeData: OptionValues, logger: (param0: string) => TruffleLogger): Object;
    unsafeCast<T extends Object | number | string | boolean>(value: Object, type: Class<T>, condition: boolean, nonNull: boolean, exact: boolean): T;
}