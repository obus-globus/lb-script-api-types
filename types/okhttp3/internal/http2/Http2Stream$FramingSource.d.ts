import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
export class Http2Stream$FramingSource extends Object implements Source {
    constructor(null_: Http2Stream$FramingSource, maxByteCount: number, finished: boolean)
    // private closed: boolean;
    /*not mapped: */ getClosed$okhttp(): boolean;
    // private finished: boolean;
    /*not mapped: */ getFinished$okhttp(): boolean;
    // private maxByteCount: number;
    readonly readBuffer: Buffer;
    readonly receiveBuffer: Buffer;
    trailers: Pair<string, string>[] | null;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    receive(source: BufferedSource, byteCount: number): void;
    timeout(): Timeout;
    // private updateConnectionFlowControl(read: number): void;
}