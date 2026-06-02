import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
export class Http2Stream$FramingSink extends Object implements Sink {
    constructor(null_: Http2Stream$FramingSink, finished: boolean)
    closed: boolean;
    finished: boolean;
    // private sendBuffer: Buffer;
    trailers: Pair<string, string>[] | null;
    close(): void;
    // private emitFrame(outFinishedOnLastFrame: boolean): void;
    flush(): void;
    timeout(): Timeout;
    write(source: Buffer, byteCount: number): void;
}