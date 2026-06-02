import type { DataInput } from '../../../../java/io/DataInput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ByteArrayDataInput extends DataInput, Object{
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