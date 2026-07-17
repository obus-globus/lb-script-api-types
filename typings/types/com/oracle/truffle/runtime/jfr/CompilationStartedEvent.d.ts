import type { OptimizedCallTarget } from '../../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { RootFunctionEvent } from '../../../../../com/oracle/truffle/runtime/jfr/RootFunctionEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CompilationStartedEvent extends RootFunctionEvent, Object{
    isEnabled(): boolean;
    publish(): void;
    setBonuses(bonuses: string): void;
    setPriority(priority: number): void;
    setQueueChange(change: number): void;
    setQueueLoad(load: number): void;
    setQueueSize(size: number): void;
    setQueueTime(time: number): void;
    setRate(rate: string): void;
    setRootFunction(target: OptimizedCallTarget): void;
    setTier(tier: number): void;
}