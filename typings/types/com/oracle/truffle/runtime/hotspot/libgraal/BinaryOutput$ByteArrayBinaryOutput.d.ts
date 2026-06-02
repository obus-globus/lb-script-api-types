import type { BinaryOutput } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/BinaryOutput.d.ts'
import type { BinaryOutput$CCharPointerBinaryOutput } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/BinaryOutput$CCharPointerBinaryOutput.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CCharPointer } from '../../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export class BinaryOutput$ByteArrayBinaryOutput extends BinaryOutput {
    static create(paraminitialSize: number): BinaryOutput$ByteArrayBinaryOutput;
    static create(): BinaryOutput$ByteArrayBinaryOutput;
    static create(paraminitialBuffer: number[]): BinaryOutput$ByteArrayBinaryOutput;
    static create(paramaddress: CCharPointer, paramlength: number, paramdynamicallyAllocated: boolean): BinaryOutput$CCharPointerBinaryOutput;
    static isTypedValue(paramvalue: Object): boolean;
    private constructor(initialBuffer: number[])
    private constructor(size: number)
    // private buffer: number[];
    // private ensureCapacity(neededCapacity: number): void;
    getArray(): number[];
    skip(numberOfBytes: number): void;
    write(b: number[], off: number, len: number): void;
    write(b: number): void;
}