import type { File } from '../../../../../../java/io/File.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { PureJavaCrc32C } from '../../../../../../org/apache/commons/codec/digest/PureJavaCrc32C.d.ts'
import type { CompressorOutputStream } from '../../../../../../org/apache/commons/compress/compressors/CompressorOutputStream.d.ts'
import type { Parameters } from '../../../../../../org/apache/commons/compress/compressors/lz77support/Parameters.d.ts'
import type { ByteUtils$ByteConsumer } from '../../../../../../org/apache/commons/compress/utils/ByteUtils$ByteConsumer.d.ts'
export class FramedSnappyCompressorOutputStream extends CompressorOutputStream<OutputStream> {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: Parameters)
    // private buffer: number[];
    // private checksum: PureJavaCrc32C;
    // private consumer: ByteUtils$ByteConsumer;
    // private currentIndex: number;
    // private oneByte: number[];
    // private params: Parameters;
    close(): void;
    finish(): void;
    // private flushBuffer(): void;
    write(arg0: File): number;
    write(arg0: Path[]): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    // private writeCrc(): void;
    // private writeLittleEndian(arg0: number, arg1: number): void;
}