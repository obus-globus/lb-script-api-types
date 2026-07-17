import type { CompilationStartedEvent } from '../../../../../../com/oracle/truffle/runtime/jfr/CompilationStartedEvent.d.ts'
import type { RootFunctionEventImpl } from '../../../../../../com/oracle/truffle/runtime/jfr/impl/RootFunctionEventImpl.d.ts'
export class CompilationStartedEventImpl extends RootFunctionEventImpl implements CompilationStartedEvent {
    constructor()
    bonuses: string;
    priority: number;
    queueChange: number;
    queueLoad: number;
    queueSize: number;
    queueTime: number;
    rate: string;
    tier: number;
    setBonuses(bonuses: string): void;
    setPriority(priority: number): void;
    setQueueChange(change: number): void;
    setQueueLoad(load: number): void;
    setQueueSize(size: number): void;
    setQueueTime(time: number): void;
    setRate(rate: string): void;
    setTier(tier: number): void;
}