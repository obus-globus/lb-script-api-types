import type { DataInput } from '../../java/io/DataInput.d.ts'
import type { DataInputStream } from '../../java/io/DataInputStream.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { ObjectInputStream$PeekInputStream } from '../../java/io/ObjectInputStream$PeekInputStream.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ObjectInputStream$BlockDataInputStream extends InputStream implements DataInput {
    static nullInputStream(): InputStream;
    constructor(null_: ObjectInputStream$BlockDataInputStream, arg1: InputStream)
    // private blkmode: boolean;
    // private buf: number[];
    // private cbuf: string[];
    // private din: DataInputStream;
    // private end: number;
    // private hbuf: number[];
    // private in: ObjectInputStream$PeekInputStream;
    // private pos: number;
    // private unread: number;
    available(): number;
    close(): void;
    currentBlockRemaining(): number;
    getBlockDataMode(): boolean;
    getBytesRead(): number;
    peek(): number;
    peekByte(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    read(arg0: number[], arg1: number, arg2: number, arg3: boolean): number;
    // private readBlockHeader(arg0: boolean): number;
    readBoolean(): boolean;
    readBooleans(arg0: (Object | null)[], arg1: number, arg2: number): void;
    readByte(): number;
    readChar(): string;
    readChars(arg0: string[], arg1: number, arg2: number): void;
    readDouble(): number;
    readDoubles(arg0: number[], arg1: number, arg2: number): void;
    readFloat(): number;
    readFloats(arg0: number[], arg1: number, arg2: number): void;
    readFully(arg0: number[]): void;
    readFully(arg0: number[], arg1: number, arg2: number): void;
    readFully(arg0: number[], arg1: number, arg2: number, arg3: boolean): void;
    readInt(): number;
    readInts(arg0: number[], arg1: number, arg2: number): void;
    readLine(): string;
    readLong(): number;
    readLongUTF(): string;
    readLongs(arg0: number[], arg1: number, arg2: number): void;
    readShort(): number;
    readShorts(arg0: number[], arg1: number, arg2: number): void;
    readUTF(): string;
    // private readUTFBody(arg0: number): string;
    // private readUTFChar(arg0: StringBuilder, arg1: number): number;
    // private readUTFSpan(arg0: number, arg1: number): number;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    // private refill(): void;
    setBlockDataMode(arg0: boolean): boolean;
    skip(arg0: number): number;
    skipBlockData(): void;
    skipBytes(arg0: number): number;
}