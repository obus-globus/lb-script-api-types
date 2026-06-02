import type { Frame } from '../../../../../../com/oracle/truffle/api/impl/asm/Frame.d.ts'
import type { Label } from '../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/api/impl/asm/Symbol.d.ts'
import type { SymbolTable } from '../../../../../../com/oracle/truffle/api/impl/asm/SymbolTable.d.ts'
export class CurrentFrame extends Frame {
    constructor(owner: Label)
    execute(opcode: number, arg: number, symbolArg: Symbol, symbolTable: SymbolTable): void;
}