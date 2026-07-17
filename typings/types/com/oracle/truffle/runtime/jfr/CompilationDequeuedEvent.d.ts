import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { RootFunctionEvent } from '../../../../../com/oracle/truffle/runtime/jfr/RootFunctionEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CompilationDequeuedEvent extends RootFunctionEvent, Object{
    isEnabled(): boolean;
    publish(): void;
    setCompilationCount(count: number): void;
    setCompilationThreshold(threshold: number): void;
    setQueueChange(change: number): void;
    setQueueLoad(load: number): void;
    setQueueSize(size: number): void;
    setQueueTime(time: number): void;
    setReason(reason: string): void;
    setRootFunction(target: OptimizedCallTarget): void;
    setTier(tier: number): void;
}