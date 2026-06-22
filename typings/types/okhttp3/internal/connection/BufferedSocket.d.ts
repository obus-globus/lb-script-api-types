import type { Object } from '../../../java/lang/Object.d.ts'
import type { BufferedSink } from '../../../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
import type { Socket } from '../../../okio/Socket.d.ts'
export interface BufferedSocket extends Object, Socket{
    readonly sink: BufferedSink;
    readonly source: BufferedSource;
    cancel(): void;
}