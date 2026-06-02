import type { DataInput } from '../../java/io/DataInput.d.ts'
import type { FilterInputStream } from '../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
export class DataInputStream extends FilterInputStream implements DataInput {
    static nullInputStream(): InputStream;
    static readUTF(paramarg0: DataInput): string;
    constructor(arg0: InputStream)
    // private bytearr: number[];
    // private chararr: string[];
    // private lineBuffer: string[];
    // private readBuffer: number[];
    read(arg0: number[]): number;
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
    skipBytes(arg0: number): number;
}