import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Bzip2BitWriter } from '../../../../../io/netty/handler/codec/compression/Bzip2BitWriter.d.ts'
import type { Crc32 } from '../../../../../io/netty/handler/codec/compression/Crc32.d.ts'
import type { ByteProcessor } from '../../../../../io/netty/util/ByteProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Bzip2BlockCompressor extends Object {
    constructor(arg0: Bzip2BitWriter, arg1: number)
    // private block: number[];
    // private blockLength: number;
    // private blockLengthLimit: number;
    // private blockValuesPresent: (Object | null)[];
    // private bwtBlock: number[];
    // private crc: Crc32;
    // private rleCurrentValue: number;
    // private rleLength: number;
    // private writeProcessor: ByteProcessor;
    // private writer: Bzip2BitWriter;
    availableSize(): number;
    close(arg0: ByteBuf): void;
    crc(): number;
    isEmpty(): boolean;
    isFull(): boolean;
    write(arg0: ByteBuf, arg1: number, arg2: number): number;
    write(arg0: number): boolean;
    // private writeRun(arg0: number, arg1: number): void;
    // private writeSymbolMap(arg0: ByteBuf): void;
}