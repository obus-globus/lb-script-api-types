import type { ByteBufferDataInput } from '../../../../../../com/oracle/truffle/api/bytecode/serialization/ByteBufferDataInput.d.ts'
import type { DataInput } from '../../../../../../java/io/DataInput.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SerializationUtils extends Object {
    static createByteBufferDataInput(parambuffer: ByteBuffer): ByteBufferDataInput;
    static createDataInput(parambuffer: ByteBuffer): DataInput;
    private constructor()
}