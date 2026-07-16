import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CCharPointer } from '../../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export abstract class BinaryInput extends Object {
    static create(parambuffer: number[]): BinaryInput;
    static create(parambuffer: number[], paramlength: number): BinaryInput;
    static create(paramaddress: CCharPointer, paramlength: number): BinaryInput;
    private constructor(length: number)
    // private length: number;
    // private pos: number;
    // private tempEncodingByteBuffer: number[];
    // private tempEncodingCharBuffer: string[];
    asByteBuffer(len: number): ByteBuffer;
    // private ensureBufferSize(len: number): void;
    read(): number;
    read(b: boolean[], off: number, len: number): void;
    read(b: number[], off: number, len: number): void;
    read(b: string[], off: number, len: number): void;
    readBoolean(): boolean;
    readByte(): number;
    readChar(): string;
    readDouble(): number;
    readFloat(): number;
    readInt(): number;
    readLong(): number;
    readShort(): number;
    readTypedValue(): Object;
    readUTF(): string;
}