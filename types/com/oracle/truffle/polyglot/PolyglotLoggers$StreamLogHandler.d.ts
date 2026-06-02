import type { PolyglotLoggers$AbstractLogHandler } from '../../../../com/oracle/truffle/polyglot/PolyglotLoggers$AbstractLogHandler.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { OutputStreamWriter } from '../../../../java/io/OutputStreamWriter.d.ts'
import type { Formatter } from '../../../../java/util/logging/Formatter.d.ts'
import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export class PolyglotLoggers$StreamLogHandler extends PolyglotLoggers$AbstractLogHandler {
    constructor(stream: OutputStream, closeStream: boolean, flushOnPublish: boolean, isDefault: boolean, disabledForActiveSandboxPolicy: SandboxPolicy)
    // private closeStream: boolean;
    // private disabledForActiveSandboxPolicy: SandboxPolicy;
    // private flushOnPublish: boolean;
    // private formatter: Formatter;
    // private isDefault: boolean;
    // private notificationPrinted: boolean;
    // private stream: OutputStream;
    // private writer: OutputStreamWriter;
    close(): void;
    flush(): void;
    publish(logRecord: LogRecord): void;
}