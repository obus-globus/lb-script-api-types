import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LifeCycle$State } from '../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
import type { LifeCycle2 } from '../../../../../org/apache/logging/log4j/core/LifeCycle2.d.ts'
export class AbstractLifeCycle extends Object implements LifeCycle2 {
    static DEFAULT_STOP_TIMEOUT: number;
    static DEFAULT_STOP_TIMEUNIT: TimeUnit;
    constructor()
    readonly state: LifeCycle$State;
    equalsImpl(obj: Object): boolean;
    getState(): LifeCycle$State;
    hashCodeImpl(): number;
    initialize(): void;
    isInitialized(): boolean;
    isStarted(): boolean;
    isStarting(): boolean;
    isStopped(): boolean;
    isStopping(): boolean;
    setStarted(): void;
    setStarting(): void;
    setState(newState: LifeCycle$State): void;
    setStopped(): void;
    setStopping(): void;
    start(): void;
    stop(): void;
    stop(future: Future<Object>): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
}