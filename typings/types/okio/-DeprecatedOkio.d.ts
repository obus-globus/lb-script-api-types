import type { File } from '../java/io/File.d.ts'
import type { InputStream } from '../java/io/InputStream.d.ts'
import type { OutputStream } from '../java/io/OutputStream.d.ts'
import type { Socket } from '../java/net/Socket.d.ts'
import type { OpenOption } from '../java/nio/file/OpenOption.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class -DeprecatedOkio extends Object {
// (invalid TS: name contains '-')     static INSTANCE: -DeprecatedOkio;
    appendingSink(file: File): Sink;
    blackhole(): Sink;
    buffer(sink: Sink): BufferedSink;
    buffer(source: Source): BufferedSource;
    sink(file: File): Sink;
    sink(outputStream: OutputStream): Sink;
    sink(socket: Socket): Sink;
    sink(path: Path[][], options: OpenOption[]): Sink;
    source(file: File): Source;
    source(inputStream: InputStream): Source;
    source(socket: Socket): Source;
    source(path: Path[][], options: OpenOption[]): Source;
}