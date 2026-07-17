import type { CompilationQueuedEvent } from '../../../../../../com/oracle/truffle/runtime/jfr/CompilationQueuedEvent.d.ts'
import type { RootFunctionEventImpl } from '../../../../../../com/oracle/truffle/runtime/jfr/impl/RootFunctionEventImpl.d.ts'
export class CompilationQueuedEventImpl extends RootFunctionEventImpl implements CompilationQueuedEvent {
    constructor()
    count: number;
    queueChange: number;
    queueLoad: number;
    queueSize: number;
    queueTime: number;
    threshold: number;
    tier: number;
    setCompilationCount(count: number): void;
    setCompilationThreshold(threshold: number): void;
    setQueueChange(change: number): void;
    setQueueLoad(load: number): void;
    setQueueSize(size: number): void;
    setQueueTime(time: number): void;
    setTier(tier: number): void;
}