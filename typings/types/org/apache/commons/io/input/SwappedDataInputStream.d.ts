import type { DataInput } from '../../../../../java/io/DataInput.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class SwappedDataInputStream extends ProxyInputStream implements DataInput {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
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