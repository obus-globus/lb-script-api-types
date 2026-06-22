import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ErrorHandler } from '../../../../../org/apache/logging/log4j/core/ErrorHandler.d.ts'
import type { Layout } from '../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LifeCycle } from '../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
import type { LifeCycle$State } from '../../../../../org/apache/logging/log4j/core/LifeCycle$State.d.ts'
import type { LogEvent } from '../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export interface Appender extends Object, LifeCycle{
    append(event: LogEvent): void;
    getHandler(): ErrorHandler;
    getLayout(): Layout<Serializable>;
    getName(): string;
    getState(): LifeCycle$State;
    ignoreExceptions(): boolean;
    initialize(): void;
    isStarted(): boolean;
    isStopped(): boolean;
    setHandler(handler: ErrorHandler): void;
    start(): void;
    stop(): void;
}