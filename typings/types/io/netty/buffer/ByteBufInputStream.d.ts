import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { DataInput } from '../../../java/io/DataInput.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
export class ByteBufInputStream extends InputStream implements DataInput {
    static nullInputStream(): InputStream;
    constructor(arg0: ByteBuf)
    constructor(arg0: ByteBuf, arg1: boolean)
    constructor(arg0: ByteBuf, arg1: number)
    constructor(arg0: ByteBuf, arg1: number, arg2: boolean)
    // private buffer: ByteBuf;
    // private closed: boolean;
    // private endIndex: number;
    // private lineBuf: StringBuilder;
    // private releaseOnClose: boolean;
    // private startIndex: number;
    available(): number;
    // private checkAvailable(arg0: number): void;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readBoolean(): boolean;
    readByte(): number;
    readBytes(): number;
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