import type { PolyglotLoggers$AbstractLogHandler } from '../../../../com/oracle/truffle/polyglot/PolyglotLoggers$AbstractLogHandler.d.ts'
import type { Handler } from '../../../../java/util/logging/Handler.d.ts'
import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
export class PolyglotLoggers$JavaLogHandler extends PolyglotLoggers$AbstractLogHandler {
    constructor(handler: Handler)
    // private handler: Handler;
    close(): void;
    flush(): void;
    publish(logRecord: LogRecord): void;
}