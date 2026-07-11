import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { FileChannel } from '../../../../../../java/nio/channels/FileChannel.d.ts'
import type { OpenOption } from '../../../../../../java/nio/file/OpenOption.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { RandomAccessOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/RandomAccessOutputStream.d.ts'
export class FileRandomAccessOutputStream extends RandomAccessOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: FileChannel)
    constructor(arg0: Path[])
    constructor(arg0: Path[], ...arg1: OpenOption[])
    // private channel: FileChannel;
    // private position: number;
    channel(): FileChannel;
    close(): void;
    position(): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeAll(arg0: number[], arg1: number, arg2: number, arg3: number): void;
    writeAll(arg0: number[], arg1: number): void;
}