import type { BinaryOutput } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/BinaryOutput.d.ts'
import type { BinaryOutput$ByteArrayBinaryOutput } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/BinaryOutput$ByteArrayBinaryOutput.d.ts'
import type { Closeable } from '../../../../../../java/io/Closeable.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CCharPointer } from '../../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export class BinaryOutput$CCharPointerBinaryOutput extends BinaryOutput implements Closeable {
    static create(): BinaryOutput$ByteArrayBinaryOutput;
    static create(paraminitialBuffer: number[]): BinaryOutput$ByteArrayBinaryOutput;
    static create(paraminitialSize: number): BinaryOutput$CCharPointerBinaryOutput;
    static create(paramaddress: CCharPointer, paramlength: number, paramdynamicallyAllocated: boolean): BinaryOutput$CCharPointerBinaryOutput;
    static isTypedValue(paramvalue: Object): boolean;
    private constructor(address: CCharPointer, length: number, unmanaged: boolean)
    readonly address: CCharPointer;
    // private byteBufferView: ByteBuffer;
    // private length: number;
    // private unmanaged: boolean;
    // private checkClosed(): void;
    close(): void;
    // private ensureCapacity(neededCapacity: number): void;
    getAddress(): CCharPointer;
    getPosition(): number;
    skip(numberOfBytes: number): void;
    write(array: (Object | null)[], off: number, len: number): void;
    write(b: number[], off: number, len: number): void;
    write(array: string[], off: number, len: number): void;
    write(array: number[], off: number, len: number): void;
    write(b: number): void;
}