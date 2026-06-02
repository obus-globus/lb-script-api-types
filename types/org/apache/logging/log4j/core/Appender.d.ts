import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ErrorHandler } from '../../../../../org/apache/logging/log4j/core/ErrorHandler.d.ts'
import type { Layout } from '../../../../../org/apache/logging/log4j/core/Layout.d.ts'
import type { LifeCycle } from '../../../../../org/apache/logging/log4j/core/LifeCycle.d.ts'
import type { LogEvent } from '../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
export interface Appender extends Object, LifeCycle{
    append(event: LogEvent): void;
    getHandler(): ErrorHandler;
    getLayout(): Layout<Serializable>;
    getName(): string;
    ignoreExceptions(): boolean;
    setHandler(handler: ErrorHandler): void;
}