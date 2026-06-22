import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LifeCycle } from '../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
import type { LifeCycle$State } from '../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
export interface LifeCycle2 extends Object, LifeCycle{
    getState(): LifeCycle$State;
    initialize(): void;
    isStarted(): boolean;
    isStopped(): boolean;
    start(): void;
    stop(): void;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}