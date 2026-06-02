import type { BytecodeBuilder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BytecodeParser<T extends BytecodeBuilder> extends Object{
    parse(builder: T): void;
}