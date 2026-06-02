import type { PrintStream } from '../../../../../java/io/PrintStream.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { StatusData } from '../../../../../org/apache/logging/log4j/status/StatusData.d.ts'
import type { StatusListener } from '../../../../../org/apache/logging/log4j/status/StatusListener.d.ts'
export class StatusConsoleListener extends Object implements StatusListener {
    constructor(level: Level)
    constructor(level: Level, stream: PrintStream)
    // private initialLevel: Level;
    // private initialStream: PrintStream;
    readonly level: Level;
    // private lock: Lock;
    readonly stream: PrintStream;
    close(): void;
    getStatusLevel(): Level;
    log(data: StatusData): void;
    setFilters(filters: string[]): void;
    setLevel(level: Level): void;
    setStream(stream: PrintStream): void;
}