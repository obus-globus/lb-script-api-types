import type { BinaryInput } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/BinaryInput.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { CCharPointer } from '../../../../../../org/graalvm/nativeimage/c/type/CCharPointer.d.ts'
export class BinaryInput$CCharPointerInput extends BinaryInput {
    static create(parambuffer: number[]): BinaryInput;
    static create(parambuffer: number[], paramlength: number): BinaryInput;
    static create(paramaddress: CCharPointer, paramlength: number): BinaryInput;
    constructor(address: CCharPointer, length: number)
    // private address: CCharPointer;
    // private byteBufferView: ByteBuffer;
    asByteBuffer(len: number): ByteBuffer;
    read(): number;
    read(b: number[], off: number, len: number): void;
}