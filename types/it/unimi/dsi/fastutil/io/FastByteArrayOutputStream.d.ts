import type { MeasurableOutputStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableOutputStream.d.ts'
import type { RepositionableStream } from '../../../../../it/unimi/dsi/fastutil/io/RepositionableStream.d.ts'
import type { ObjectOutput } from '../../../../../java/io/ObjectOutput.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FastByteArrayOutputStream extends MeasurableOutputStream implements RepositionableStream, ObjectOutput {
    static DEFAULT_INITIAL_CAPACITY: number;
    static nullOutputStream(): OutputStream;
    constructor()
    constructor(arg0: number[])
    constructor(arg0: number)
    array: number[];
    length: number;
    // private position: number;
    close(): void;
    length(): number;
    position(): number;
    position(arg0: number): void;
    reset(): void;
    toByteArray(): number[];
    toString(arg0: Charset): string;
    trim(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeBoolean(arg0: boolean): void;
    writeByte(arg0: number): void;
    writeBytes(arg0: string): void;
    writeChar(arg0: number): void;
    writeChars(arg0: string): void;
    writeDouble(arg0: number): void;
    writeFloat(arg0: number): void;
    writeInt(arg0: number): void;
    writeLong(arg0: number): void;
    writeObject(arg0: Object): void;
    writeShort(arg0: number): void;
    writeTo(arg0: OutputStream): void;
    writeUTF(arg0: string): void;
    writeUtf8Char(arg0: string): number;
}