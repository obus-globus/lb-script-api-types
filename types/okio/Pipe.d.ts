import type { Condition } from '../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class Pipe extends Object {
    constructor(maxBufferSize: number)
    // private buffer: Buffer;
    /*not mapped: */ getBuffer$okio(): Buffer;
    // private canceled: boolean;
    /*not mapped: */ getCanceled$okio(): boolean;
    readonly condition: Condition;
    // private foldedSink: Sink | null;
    /*not mapped: */ getFoldedSink$okio(): Sink | null;
    readonly lock: ReentrantLock;
    // private maxBufferSize: number;
    /*not mapped: */ getMaxBufferSize$okio(): number;
    // private sink: Sink;
    sink(): Sink;
    // private sinkClosed: boolean;
    /*not mapped: */ getSinkClosed$okio(): boolean;
    // private source: Source;
    source(): Source;
    // private sourceClosed: boolean;
    /*not mapped: */ getSourceClosed$okio(): boolean;
    cancel(): void;
    fold(sink: Sink): void;
    sink(): Sink;
    source(): Source;
}