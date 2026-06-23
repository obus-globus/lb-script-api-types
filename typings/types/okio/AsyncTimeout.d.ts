import type { IOException } from '../java/io/IOException.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
import type { Timeout$Companion } from '../okio/Timeout$Companion.d.ts'
export class AsyncTimeout extends Timeout {
    static Companion: Timeout$Companion;
    static NONE: Timeout;
    constructor()
    index: number;
    // private state: number;
    // private timeoutAt: number;
    /*not mapped: */ getTimeoutAt$okio(): number;
    cancel(): void;
    enter(): void;
    exit(): boolean;
    protected newTimeoutException(cause: IOException | null): IOException;
    remainingNanos(now: number): number;
    setTimeoutAt(now: number): void;
    sink(sink: Sink): Sink;
    source(source: Source): Source;
    protected timedOut(): void;
    withTimeout<T extends unknown>(block: () => T): T;
}