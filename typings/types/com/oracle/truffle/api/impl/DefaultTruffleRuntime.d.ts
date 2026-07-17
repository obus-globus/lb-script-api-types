import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleRuntime } from '../../../../../com/oracle/truffle/api/TruffleRuntime.d.ts'
import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { FrameInstanceVisitor } from '../../../../../com/oracle/truffle/api/frame/FrameInstanceVisitor.d.ts'
import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { DefaultTVMCI } from '../../../../../com/oracle/truffle/api/impl/DefaultTVMCI.d.ts'
import type { DefaultTruffleRuntime$DefaultFrameInstance } from '../../../../../com/oracle/truffle/api/impl/DefaultTruffleRuntime$DefaultFrameInstance.d.ts'
import type { TVMCI$Test } from '../../../../../com/oracle/truffle/api/impl/TVMCI$Test.d.ts'
import type { DirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { IndirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { LoopNode } from '../../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultTruffleRuntime extends Object implements TruffleRuntime {
    constructor()
    constructor(fallbackReason: string)
    constructor(fallbackReason: string, explicitlyRequested: boolean)
    readonly explicitlyRequested: boolean;
    readonly fallbackReason: string;
    // private stackTraces: ThreadLocal<DefaultTruffleRuntime$DefaultFrameInstance>;
    // private testTvmci: TVMCI$Test<Closeable, CallTarget>;
    readonly tvmci: DefaultTVMCI;
    createAssumption(): Assumption;
    createAssumption(name: string): Assumption;
    createDirectCallNode(target: CallTarget): DirectCallNode;
    createIndirectCallNode(): IndirectCallNode;
    createLoopNode(repeating: RepeatingNode): LoopNode;
    createMaterializedFrame(arguments: Object[]): MaterializedFrame;
    createMaterializedFrame(arguments: Object[], frameDescriptor: FrameDescriptor): MaterializedFrame;
    createVirtualFrame(arguments: Object[], frameDescriptor: FrameDescriptor): VirtualFrame;
    getCapability<T extends unknown>(capability: Class<T>): T;
    getFallbackReason(): string;
    getName(): string;
    // private getThreadLocalStackTrace(): DefaultTruffleRuntime$DefaultFrameInstance;
    getTvmci(): DefaultTVMCI;
    isExplicitlyRequested(): boolean;
    isProfilingEnabled(): boolean;
    iterateFrames<T extends unknown>(visitor: FrameInstanceVisitor<T>): T;
    iterateFrames<T extends unknown>(visitor: FrameInstanceVisitor<T>, skipFrames: number): T;
    markFrameMaterializeCalled(descriptor: FrameDescriptor): void;
    notifyTransferToInterpreter(): void;
    popFrame(callerFrame: DefaultTruffleRuntime$DefaultFrameInstance): void;
    pushFrame(frame: VirtualFrame, target: CallTarget): DefaultTruffleRuntime$DefaultFrameInstance;
    pushFrame(frame: VirtualFrame, target: CallTarget, parentCallNode: Node): DefaultTruffleRuntime$DefaultFrameInstance;
    // private setThreadLocalStackTrace(topFrame: DefaultTruffleRuntime$DefaultFrameInstance): void;
}