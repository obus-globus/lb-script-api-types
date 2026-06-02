import type { LoggerConfig } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { LoggerConfig$Builder } from '../../../../../../org/apache/logging/log4j/core/config/LoggerConfig$Builder.d.ts'
export class AsyncLoggerConfig$Builder<B extends AsyncLoggerConfig$Builder<B>> extends LoggerConfig$Builder<B> {
    constructor()
    build(): LoggerConfig;
}