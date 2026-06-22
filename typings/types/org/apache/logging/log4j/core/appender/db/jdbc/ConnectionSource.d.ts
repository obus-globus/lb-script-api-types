import type { Connection } from '../../../../../../../../java/sql/Connection.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LifeCycle } from '../../../../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
import type { LifeCycle$State } from '../../../../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
export interface ConnectionSource extends Object, LifeCycle{
    getConnection(): Connection;
    getState(): LifeCycle$State;
    initialize(): void;
    isStarted(): boolean;
    isStopped(): boolean;
    start(): void;
    stop(): void;
}