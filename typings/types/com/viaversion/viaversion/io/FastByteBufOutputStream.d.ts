import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DataOutput } from '../../../../java/io/DataOutput.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class FastByteBufOutputStream extends OutputStream implements DataOutput {
    static nullOutputStream(): OutputStream;
    constructor(arg0: ByteBuf)
    // private buf: ByteBuf;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeBoolean(arg0: boolean): void;
    writeByte(arg0: number): void;
    writeBytes(arg0: string): void;
    writeChar(arg0: number): void;
    writeChars(arg0: string): void;
    writeDouble(arg0: number): void;
    writeFloat(arg0: number): void;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    writeShort(arg0: number): void;
    writeUTF(arg0: string): void;
}