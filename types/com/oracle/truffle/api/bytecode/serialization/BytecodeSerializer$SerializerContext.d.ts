import type { BytecodeRootNode } from '../../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNode.d.ts'
import type { DataOutput } from '../../../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BytecodeSerializer$SerializerContext extends Object{
    writeBytecodeNode(buffer: DataOutput, node: BytecodeRootNode): void;
}