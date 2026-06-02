import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufChecksum } from '../../../../../io/netty/handler/codec/compression/ByteBufChecksum.d.ts'
export class Lz4XXHash32 extends ByteBufChecksum {
    constructor(arg0: number)
    // private seed: number;
    // private used: boolean;
    readonly value: number;
    getValue(): number;
    reset(): void;
    update(arg0: ByteBuf, arg1: number, arg2: number): void;
    update(arg0: number[], arg1: number, arg2: number): void;
    update(arg0: number): void;
}