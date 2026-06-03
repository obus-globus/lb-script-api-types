import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufChecksum } from '../../../../../io/netty/handler/codec/compression/ByteBufChecksum.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
export class Crc32c extends ByteBufChecksum {
    constructor()
    // private crc: number;
    getValue(): number;
    reset(): void;
    update(arg0: ByteBuf, arg1: number, arg2: number): void;
    update(arg0: ByteBuffer): void;
    update(arg0: number[]): void;
    update(arg0: number[], arg1: number, arg2: number): void;
    update(arg0: number): void;
}