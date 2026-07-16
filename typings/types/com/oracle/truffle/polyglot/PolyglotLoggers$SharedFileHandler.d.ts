import type { PolyglotLoggers$StreamLogHandler } from '../../../../com/oracle/truffle/polyglot/PolyglotLoggers$StreamLogHandler.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
export class PolyglotLoggers$SharedFileHandler extends PolyglotLoggers$StreamLogHandler {
    constructor(path: Path)
    // private path: Path;
    // private refCount: number;
    close(): void;
    retain(): PolyglotLoggers$SharedFileHandler;
}