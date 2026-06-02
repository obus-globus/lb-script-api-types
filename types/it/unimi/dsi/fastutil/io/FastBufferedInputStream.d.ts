import type { FastBufferedInputStream$LineTerminator } from '../../../../../it/unimi/dsi/fastutil/io/FastBufferedInputStream$LineTerminator.d.ts'
import type { MeasurableInputStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableInputStream.d.ts'
import type { MeasurableStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableStream.d.ts'
import type { RepositionableStream } from '../../../../../it/unimi/dsi/fastutil/io/RepositionableStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
export class FastBufferedInputStream extends MeasurableInputStream implements RepositionableStream {
    static ALL_TERMINATORS: FastBufferedInputStream$LineTerminator[];
    static DEFAULT_BUFFER_SIZE: number;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: number[])
    constructor(arg0: InputStream, arg1: number)
    // private avail: number;
    // private buffer: number[];
    // private fileChannel: FileChannel;
    // private is: InputStream;
    // private measurableStream: MeasurableStream;
    // private pos: number;
    // private readBytes: number;
    // private repositionableStream: RepositionableStream;
    available(): number;
    close(): void;
    flush(): void;
    length(): number;
    noMoreCharacters(): boolean;
    position(): number;
    position(arg0: number): void;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readLine(arg0: number[]): number;
    readLine(arg0: number[], arg1: FastBufferedInputStream$LineTerminator[]): number;
    readLine(arg0: number[], arg1: number, arg2: number): number;
    readLine(arg0: number[], arg1: number, arg2: number, arg3: FastBufferedInputStream$LineTerminator[]): number;
    reset(): void;
    skip(arg0: number): number;
    // private skipByReading(arg0: number): number;
}