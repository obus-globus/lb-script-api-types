import type { BytecodeRootNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNode.d.ts'
import type { DataInput } from '../../../../../../java/io/DataInput.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BytecodeDeserializer$DeserializerContext extends Object{
    readBytecodeNode(buffer: DataInput): BytecodeRootNode;
}