import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractPolyglotImpl$LogHandler extends Object {
    constructor()
    close(): void;
    flush(): void;
    publish(logRecord: LogRecord): void;
}