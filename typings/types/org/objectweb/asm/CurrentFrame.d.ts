import type { Frame } from '../../../org/objectweb/asm/Frame.d.ts'
import type { Label } from '../../../org/objectweb/asm/Label.d.ts'
import type { Symbol } from '../../../org/objectweb/asm/Symbol.d.ts'
import type { SymbolTable } from '../../../org/objectweb/asm/SymbolTable.d.ts'
export class CurrentFrame extends Frame {
    constructor(arg0: Label)
    execute(arg0: number, arg1: number, arg2: Symbol, arg3: SymbolTable): void;
}