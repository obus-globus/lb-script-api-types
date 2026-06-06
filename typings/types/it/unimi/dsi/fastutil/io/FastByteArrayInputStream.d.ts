import type { MeasurableInputStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableInputStream.d.ts'
import type { RepositionableStream } from '../../../../../it/unimi/dsi/fastutil/io/RepositionableStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ObjectInput } from '../../../../../java/io/ObjectInput.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FastByteArrayInputStream extends MeasurableInputStream implements RepositionableStream, ObjectInput {
    static nullInputStream(): InputStream;
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number, arg2: number)
    array: number[];
    length: number;
    // private mark: number;
    offset: number;
    // private position: number;
    available(): number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
    peek(): number;
    position(): number;
    position(arg0: number): void;
    read(): number;
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
    readObject(): Object;
    readShort(): number;
    readUTF(): string;
    readUnsignedByte(): number;
    readUnsignedShort(): number;
    reset(): void;
    skip(arg0: number): number;
    skipBytes(arg0: number): number;
}