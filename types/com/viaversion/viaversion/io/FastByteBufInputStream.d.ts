import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class FastByteBufInputStream extends InputStream implements DataInput {
    static nullInputStream(): InputStream;
    constructor(arg0: ByteBuf)
    // private buf: ByteBuf;
    // private bytearr: number[];
    // private chararr: string[];
    available(): number;
    // private checkAvailable(arg0: number): void;
    // private decodeFromArray(arg0: number[], arg1: number, arg2: number): string;
    // private ensureBytes(arg0: number): number[];
    // private ensureChars(arg0: number): string[];
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
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
    readShort(): number;
    readUTF(): string;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    reset(): void;
    skip(arg0: number): number;
    skipBytes(arg0: number): number;
}