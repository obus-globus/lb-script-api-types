import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { RandomAccessFile } from '../../../../java/io/RandomAccessFile.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { RecordingInput$Block } from '../../../../jdk/jfr/internal/consumer/RecordingInput$Block.d.ts'
import type { HiddenWait } from '../../../../jdk/jfr/internal/management/HiddenWait.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RecordingInput extends Object implements DataInput, AutoCloseable {
    constructor(arg0: File)
    constructor(arg0: File, arg1: number)
    // private blockSize: number;
    // private currentBlock: RecordingInput$Block;
    readonly file: RandomAccessFile;
    readonly filename: string;
    // private pollCount: number;
    // private position: number;
    // private previousBlock: RecordingInput$Block;
    // private size: number;
    // private threadSleeper: HiddenWait;
    // private calculateBlockStart(arg0: number): number;
    close(): void;
    getFileSize(): number;
    getFilename(): string;
    // private initialize(arg0: File): void;
    pollWait(): void;
    position(): number;
    position(arg0: number): void;
    positionPhysical(arg0: number): void;
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readFully(arg0: number[]): void;
    readFully(arg0: number[], arg1: number, arg2: number): void;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    // private readLongSlow(): number;
    readPhysicalByte(): number;
    readPhysicalLong(): number;
    readRawInt(): number;
    readRawLong(): number;
    readRawShort(): number;
    readShort(): number;
    readUTF(): string;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    require(arg0: number, arg1: string): void;
    setFile(arg0: Path[]): void;
    setStreamed(): void;
    setValidSize(arg0: number): void;
    size(): number;
    skipBytes(arg0: number): number;
    // private trimToFileSize(arg0: number): number;
}