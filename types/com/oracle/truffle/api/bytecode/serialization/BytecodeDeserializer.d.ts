import type { BytecodeDeserializer$DeserializerContext } from '../../../../../../com/oracle/truffle/api/bytecode/serialization/BytecodeDeserializer$DeserializerContext.d.ts'
import type { DataInput } from '../../../../../../java/io/DataInput.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BytecodeDeserializer extends Object{
    deserialize(context: BytecodeDeserializer$DeserializerContext, buffer: DataInput): Object;
}