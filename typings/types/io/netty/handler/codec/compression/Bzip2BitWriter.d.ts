import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Bzip2BitWriter extends Object {
    constructor()
    // private bitBuffer: number;
    // private bitCount: number;
    flush(arg0: ByteBuf): void;
    writeBits(arg0: ByteBuf, arg1: number, arg2: number): void;
    writeBoolean(arg0: ByteBuf, arg1: boolean): void;
    writeInt(arg0: ByteBuf, arg1: number): void;
    writeUnary(arg0: ByteBuf, arg1: number): void;
}