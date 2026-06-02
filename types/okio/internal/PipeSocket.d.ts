import type { Object } from '../../java/lang/Object.d.ts'
import type { Pipe } from '../../okio/Pipe.d.ts'
import type { Sink } from '../../okio/Sink.d.ts'
import type { Socket } from '../../okio/Socket.d.ts'
import type { Source } from '../../okio/Source.d.ts'
export class PipeSocket extends Object implements Socket {
    constructor(sinkPipe: Pipe, sourcePipe: Pipe)
    readonly sink: Sink;
    readonly sinkPipe: Pipe;
    readonly source: Source;
    readonly sourcePipe: Pipe;
    cancel(): void;
}