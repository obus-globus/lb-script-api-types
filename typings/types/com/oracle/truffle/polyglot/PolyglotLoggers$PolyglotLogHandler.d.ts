import type { PolyglotEngineImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotEngineImpl.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
export class PolyglotLoggers$PolyglotLogHandler extends AbstractPolyglotImpl$LogHandler {
    constructor()
    constructor(engine: PolyglotEngineImpl)
    // private engineRef: WeakReference<PolyglotEngineImpl>;
    close(): void;
    flush(): void;
    publish(record: LogRecord): void;
}