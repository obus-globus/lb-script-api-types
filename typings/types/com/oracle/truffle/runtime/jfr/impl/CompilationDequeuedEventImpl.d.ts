import type { CompilationDequeuedEvent } from '../../../../../../com/oracle/truffle/runtime/jfr/CompilationDequeuedEvent.d.ts'
import type { RootFunctionEventImpl } from '../../../../../../com/oracle/truffle/runtime/jfr/impl/RootFunctionEventImpl.d.ts'
export class CompilationDequeuedEventImpl extends RootFunctionEventImpl implements CompilationDequeuedEvent {
    constructor()
    count: number;
    queueChange: number;
    queueLoad: number;
    queueSize: number;
    queueTime: number;
    reason: string;
    threshold: number;
    tier: number;
    setCompilationCount(count: number): void;
    setCompilationThreshold(threshold: number): void;
    setQueueChange(change: number): void;
    setQueueLoad(load: number): void;
    setQueueSize(size: number): void;
    setQueueTime(time: number): void;
    setReason(reason: string): void;
    setTier(tier: number): void;
}