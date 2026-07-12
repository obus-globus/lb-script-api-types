import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PrettyPrinter$IVariableWidthEntry } from '../../../../org/spongepowered/asm/util/PrettyPrinter$IVariableWidthEntry.d.ts'
import type { PrettyPrinter$Table } from '../../../../org/spongepowered/asm/util/PrettyPrinter$Table.d.ts'
export class PrettyPrinter$Row extends Object implements PrettyPrinter$IVariableWidthEntry {
    constructor(arg0: PrettyPrinter$Table, ...arg1: Object[])
    // private args: string[];
    // private table: PrettyPrinter$Table;
    getWidth(): number;
    toString(): string;
}