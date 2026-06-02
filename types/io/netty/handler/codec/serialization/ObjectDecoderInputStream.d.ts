import type { ClassResolver } from '../../../../../io/netty/handler/codec/serialization/ClassResolver.d.ts'
import type { DataInputStream } from '../../../../../java/io/DataInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ObjectInput } from '../../../../../java/io/ObjectInput.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectDecoderInputStream extends InputStream implements ObjectInput {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: ClassLoader)
    constructor(arg0: InputStream, arg1: ClassLoader, arg2: number)
    constructor(arg0: InputStream, arg1: number)
    // private classResolver: ClassResolver;
    // private in: DataInputStream;
    // private maxObjectSize: number;
    available(): number;
    close(): void;
    mark(arg0: number): void;
    markSupported(): boolean;
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