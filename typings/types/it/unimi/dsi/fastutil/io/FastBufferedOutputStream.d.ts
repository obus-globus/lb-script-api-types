import type { MeasurableOutputStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableOutputStream.d.ts'
import type { MeasurableStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableStream.d.ts'
import type { RepositionableStream } from '../../../../../it/unimi/dsi/fastutil/io/RepositionableStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { FileChannel } from '../../../../../java/nio/channels/FileChannel.d.ts'
export class FastBufferedOutputStream extends MeasurableOutputStream implements RepositionableStream {
    static DEFAULT_BUFFER_SIZE: number;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: number[])
    constructor(arg0: OutputStream, arg1: number)
    // private avail: number;
    // private buffer: number[];
    // private fileChannel: FileChannel;
    // private measurableStream: MeasurableStream;
    // private os: OutputStream;
    // private pos: number;
    // private repositionableStream: RepositionableStream;
    close(): void;
    // private dumpBuffer(arg0: boolean): void;
    flush(): void;
    length(): number;
    position(): number;
    position(arg0: number): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}