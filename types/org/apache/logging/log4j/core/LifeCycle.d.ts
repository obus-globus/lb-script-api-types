import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LifeCycle$State } from '../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
export interface LifeCycle extends Object{
    getState(): LifeCycle$State;
    initialize(): void;
    isStarted(): boolean;
    isStopped(): boolean;
    start(): void;
    stop(): void;
}