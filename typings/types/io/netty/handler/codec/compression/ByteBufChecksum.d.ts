import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteProcessor } from '../../../../../io/netty/util/ByteProcessor.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ByteBufChecksum extends Object implements Checksum {
    constructor()
    // private updateProcessor: ByteProcessor;
    getValue(): number;
    reset(): void;
    update(arg0: ByteBuf, arg1: number, arg2: number): void;
    update(arg0: ByteBuffer): void;
    update(arg0: number[]): void;
}