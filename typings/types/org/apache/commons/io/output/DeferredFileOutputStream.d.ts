import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { ByteArrayOutputStream } from '../../../../../org/apache/commons/io/output/ByteArrayOutputStream.d.ts'
import type { DeferredFileOutputStream$Builder } from '../../../../../org/apache/commons/io/output/DeferredFileOutputStream$Builder.d.ts'
import type { ThresholdingOutputStream } from '../../../../../org/apache/commons/io/output/ThresholdingOutputStream.d.ts'
export class DeferredFileOutputStream extends ThresholdingOutputStream {
    static builder(): DeferredFileOutputStream$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: number, arg1: File)
    constructor(arg0: number, arg1: number, arg2: File)
    constructor(arg0: number, arg1: number, arg2: string, arg3: string, arg4: File)
    constructor(arg0: number, arg1: string, arg2: string, arg3: File)
    constructor(arg0: DeferredFileOutputStream$Builder, arg1: any)
    // private closed: boolean;
    // private currentOutputStream: OutputStream;
    // private directory: Path[];
    // private memoryOutputStream: ByteArrayOutputStream;
    // private outputPath: Path[];
    // private prefix: string;
    // private suffix: string;
    close(): void;
    getData(): number[];
    getFile(): File;
    getPath(): Path[];
    getStream(): OutputStream;
    isInMemory(): boolean;
    thresholdReached(): void;
    toInputStream(): InputStream;
    writeTo(arg0: OutputStream): void;
}