import type { DataInput } from '../../java/io/DataInput.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ObjectInput extends DataInput, AutoCloseable, Object{
    available(): number;
    close(): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readInt(): number;
    readLine(): string;
    readLong(): number;
    readObject(): Object;
    readShort(): number;
    readUTF(): string;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    skip(arg0: number): number;
    skipBytes(arg0: number): number;
}