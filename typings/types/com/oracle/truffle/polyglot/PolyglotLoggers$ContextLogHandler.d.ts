import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
export class PolyglotLoggers$ContextLogHandler extends AbstractPolyglotImpl$LogHandler {
    constructor(context: PolyglotContextImpl)
    // private contextRef: WeakReference<PolyglotContextImpl>;
    close(): void;
    // private findDelegate(): AbstractPolyglotImpl$LogHandler;
    flush(): void;
    publish(record: LogRecord): void;
}