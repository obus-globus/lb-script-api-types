import type { BinaryOutput$ByteArrayBinaryOutput } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/BinaryOutput$ByteArrayBinaryOutput.d.ts'
import type { BinaryOutput$CCharPointerBinaryOutput } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/BinaryOutput$CCharPointerBinaryOutput.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CCharPointer } from '../../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export abstract class BinaryOutput extends Object {
    static create(): BinaryOutput$ByteArrayBinaryOutput;
    static create(paraminitialBuffer: number[]): BinaryOutput$ByteArrayBinaryOutput;
    static create(paramaddress: CCharPointer, paramlength: number, paramdynamicallyAllocated: boolean): BinaryOutput$CCharPointerBinaryOutput;
    static isTypedValue(paramvalue: Object): boolean;
    private constructor()
    // private pos: number;
    // private tempDecodingBuffer: number[];
    // private ensureBufferSize(headerSize: number, dataSize: number): void;
    getPosition(): number;
    skip(numberOfBytes: number): void;
    write(array: (Object | null)[], off: number, len: number): void;
    write(array: number[], off: number, len: number): void;
    write(array: string[], off: number, len: number): void;
    write(b: number): void;
    writeBoolean(value: boolean): void;
    writeByte(value: number): void;
    writeChar(value: number): void;
    writeDouble(value: number): void;
    writeFloat(value: number): void;
    writeInt(value: number): void;
    writeLong(value: number): void;
    writeShort(value: number): void;
    writeTypedValue(value: Object): void;
    writeUTF(string: string): void;
}