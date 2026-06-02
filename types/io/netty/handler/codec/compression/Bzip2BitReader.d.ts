import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Bzip2BitReader extends Object {
    constructor()
    // private bitBuffer: number;
    // private bitCount: number;
    // private in: ByteBuf;
    hasReadableBits(arg0: number): boolean;
    hasReadableBytes(arg0: number): boolean;
    isReadable(): boolean;
    readBits(arg0: number): number;
    readBoolean(): boolean;
    readInt(): number;
    refill(): void;
    setByteBuf(arg0: ByteBuf): void;
}