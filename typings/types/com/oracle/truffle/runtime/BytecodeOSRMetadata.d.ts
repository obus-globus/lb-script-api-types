import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { FrameWithoutBoxing } from '../../../../com/oracle/truffle/api/impl/FrameWithoutBoxing.d.ts'
import type { BytecodeOSRNode } from '../../../../com/oracle/truffle/api/nodes/BytecodeOSRNode.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BytecodeOSRMetadata$LazyState } from '../../../../com/oracle/truffle/runtime/BytecodeOSRMetadata$LazyState.d.ts'
import type { BytecodeOSRMetadata$OsrEntryDescription } from '../../../../com/oracle/truffle/runtime/BytecodeOSRMetadata$OsrEntryDescription.d.ts'
import type { BytecodeOSRMetadata$ReAttemptsCounter } from '../../../../com/oracle/truffle/runtime/BytecodeOSRMetadata$ReAttemptsCounter.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class BytecodeOSRMetadata extends Object {
    static DISABLED: BytecodeOSRMetadata;
    static OSR_POLL_INTERVAL: number;
    static OSR_POLL_SHIFT: number;
    constructor(osrNode: BytecodeOSRNode, osrThreshold: number, maxCompilationReAttempts: number)
    readonly backEdgeCount: number;
    // private compilationReAttempts: BytecodeOSRMetadata$ReAttemptsCounter;
    // private currentlyCompiling: AtomicReference<Object>;
    // private lazyState: BytecodeOSRMetadata$LazyState;
    // private maxCompilationReAttempts: number;
    // private osrNode: BytecodeOSRNode;
    // private osrThreshold: number;
    // private secondaryOsrThreshold: number;
    // private stage: number;
    // private createOSRTarget(target: number, interpreterState: Object, frameDescriptor: FrameDescriptor, useParentFrame: boolean): OptimizedCallTarget;
    forceDisable(): void;
    getBackEdgeCount(): number;
    // private getCurrentlyCompiling(): OptimizedCallTarget;
    getLazyState(): BytecodeOSRMetadata$LazyState;
    // private getLazyStateBoundary(): BytecodeOSRMetadata$LazyState;
    getOSRCompilations(): JavaMap<number, OptimizedCallTarget>;
    incrementAndPoll(): boolean;
    incrementAndPoll(loopCountIncrement: number): boolean;
    isDisabled(): boolean;
    // private markOSRDisabled(): void;
    nodeReplaced(oldNode: Node, newNode: Node, reason: CharSequence): void;
    // private requestOSRCompilation(target: number, callTarget: OptimizedCallTarget, frame: FrameWithoutBoxing): void;
    // private resetCounter(): void;
    restoreFrame(source: FrameWithoutBoxing, target: FrameWithoutBoxing): void;
    transferFrame(source: FrameWithoutBoxing, target: FrameWithoutBoxing, targetMetadata: Object): void;
    tryOSR(target: number, interpreterState: Object, beforeTransfer: () => void, parentFrame: VirtualFrame): Object;
    // private updateFrameSlots(frame: FrameWithoutBoxing, osrEntry: BytecodeOSRMetadata$OsrEntryDescription): void;
}