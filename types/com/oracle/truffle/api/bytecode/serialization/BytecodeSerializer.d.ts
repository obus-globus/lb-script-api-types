import type { BytecodeSerializer$SerializerContext } from '../../../../../../com/oracle/truffle/api/bytecode/serialization/BytecodeSerializer$SerializerContext.d.ts'
import type { DataOutput } from '../../../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BytecodeSerializer extends Object{
    serialize(context: BytecodeSerializer$SerializerContext, buffer: DataOutput, object: Object): void;
}