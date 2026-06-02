import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class LittleEndianDataInputStream extends FilterInputStream implements DataInput {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream)
    // private readAndCheckByte(): number;
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readFully(b: number[]): void;
    readFully(b: number[], off: number, len: number): void;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    readShort(): number;
    readUTF(): string;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    skipBytes(n: number): number;
}