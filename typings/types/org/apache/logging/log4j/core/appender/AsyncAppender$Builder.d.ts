import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AsyncAppender } from '../../../../../../org/apache/logging/log4j/core/appender/AsyncAppender.d.ts'
import type { BlockingQueueFactory } from '../../../../../../org/apache/logging/log4j/core/async/BlockingQueueFactory.d.ts'
import type { AppenderRef } from '../../../../../../org/apache/logging/log4j/core/config/AppenderRef.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractFilterable$Builder } from '../../../../../../org/apache/logging/log4j/core/filter/AbstractFilterable$Builder.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
export class AsyncAppender$Builder<B extends AsyncAppender$Builder<B>> extends AbstractFilterable$Builder<B> implements Builder<AsyncAppender> {
    constructor()
    // private appenderRefs: AppenderRef[];
    // private blocking: boolean;
    // private blockingQueueFactory: BlockingQueueFactory<LogEvent>;
    // private bufferSize: number;
    // private configuration: Configuration;
    // private errorRef: string;
    // private ignoreExceptions: boolean;
    // private includeLocation: boolean;
    // private name: string;
    // private shutdownTimeout: number;
    build(): AsyncAppender;
    getErrorPrefix(): string;
    isValid(): boolean;
    setAppenderRefs(appenderRefs: AppenderRef[]): AsyncAppender$Builder<any>;
    setBlocking(blocking: boolean): AsyncAppender$Builder<any>;
    setBlockingQueueFactory(blockingQueueFactory: BlockingQueueFactory<LogEvent>): AsyncAppender$Builder<any>;
    setBufferSize(bufferSize: number): AsyncAppender$Builder<any>;
    setConfiguration(configuration: Configuration): AsyncAppender$Builder<any>;
    setErrorRef(errorRef: string): AsyncAppender$Builder<any>;
    setIgnoreExceptions(ignoreExceptions: boolean): AsyncAppender$Builder<any>;
    setIncludeLocation(includeLocation: boolean): AsyncAppender$Builder<any>;
    setName(name: string): AsyncAppender$Builder<any>;
    setShutdownTimeout(shutdownTimeout: number): AsyncAppender$Builder<any>;
}