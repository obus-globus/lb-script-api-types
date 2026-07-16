import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { FileChannel } from '../../../../../../java/nio/channels/FileChannel.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { FileRandomAccessOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/FileRandomAccessOutputStream.d.ts'
import type { RandomAccessOutputStream } from '../../../../../../org/apache/commons/compress/archivers/zip/RandomAccessOutputStream.d.ts'
export class ZipSplitOutputStream extends RandomAccessOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: File, arg1: number)
    constructor(arg0: Path, arg1: number)
    // private currentChannel: FileChannel;
    readonly currentSplitSegmentBytesWritten: number;
    readonly currentSplitSegmentIndex: number;
    // private diskToPosition: number[];
    // private finished: boolean;
    // private outputStream: FileRandomAccessOutputStream;
    // private positionToFiles: { [key: number]: Path };
    // private singleByte: number[];
    // private splitSize: number;
    // private totalPosition: number;
    // private zipFile: Path;
    calculateDiskPosition(arg0: number, arg1: number): number;
    close(): void;
    // private createNewSplitSegmentFile(arg0: number): Path;
    // private finish(): void;
    getCurrentSplitSegmentBytesWritten(): number;
    getCurrentSplitSegmentIndex(): number;
    // private getSplitSegmentFileName(arg0: number): Path;
    // private openNewSplitSegment(): void;
    position(): number;
    prepareToWriteUnsplittableContent(arg0: number): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeAll(arg0: number[], arg1: number, arg2: number, arg3: number): void;
    writeAll(arg0: number[], arg1: number): void;
    // private writeToSegment(arg0: Path, arg1: number, arg2: number[], arg3: number, arg4: number): void;
    // private writeZipSplitSignature(): void;
}