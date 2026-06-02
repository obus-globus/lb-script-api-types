import type { ByteArrayDataInput } from '../../../../com/google/common/io/ByteArrayDataInput.d.ts'
import type { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.d.ts'
import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteStreams$ByteArrayDataInputStream extends Object implements ByteArrayDataInput {
    constructor(byteArrayInputStream: ByteArrayInputStream)
    // private input: DataInput;
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