import type { BinaryInput } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/BinaryInput.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CCharPointer } from '../../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export class BinaryInput$ByteArrayBinaryInput extends BinaryInput {
    static create(parambuffer: number[]): BinaryInput;
    static create(parambuffer: number[], paramlength: number): BinaryInput;
    static create(paramaddress: CCharPointer, paramlength: number): BinaryInput;
    constructor(buffer: number[])
    constructor(buffer: number[], length: number)
    // private buffer: number[];
    asByteBuffer(len: number): ByteBuffer;
    read(): number;
    read(b: (Object | null)[], off: number, len: number): void;
    read(b: number[], off: number, len: number): void;
    read(b: string[], off: number, len: number): void;
    read(b: number[], off: number, len: number): void;
    read(b: number[], off: number, len: number): void;
    read(b: number[], off: number, len: number): void;
    read(b: number[], off: number, len: number): void;
    read(b: number[], off: number, len: number): void;
}