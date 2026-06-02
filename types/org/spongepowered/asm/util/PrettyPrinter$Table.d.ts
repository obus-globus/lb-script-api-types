import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PrettyPrinter$Column } from '../../../../org/spongepowered/asm/util/PrettyPrinter$Column.d.ts'
import type { PrettyPrinter$IVariableWidthEntry } from '../../../../org/spongepowered/asm/util/PrettyPrinter$IVariableWidthEntry.d.ts'
import type { PrettyPrinter$Row } from '../../../../org/spongepowered/asm/util/PrettyPrinter$Row.d.ts'
export class PrettyPrinter$Table extends Object implements PrettyPrinter$IVariableWidthEntry {
    constructor()
    // private addHeader: boolean;
    // private colSpacing: number;
    // private columns: PrettyPrinter$Column[];
    // private format: string;
    // private rows: PrettyPrinter$Row[];
    add(arg0: PrettyPrinter$Column): PrettyPrinter$Column;
    add(arg0: PrettyPrinter$Row): PrettyPrinter$Row;
    addColumn(arg0: string): PrettyPrinter$Column;
    addRow(arg0: Object[]): PrettyPrinter$Row;
    getWidth(): number;
    grow(arg0: number): PrettyPrinter$Table;
    headerAdded(): void;
    setColSpacing(arg0: number): void;
    toString(): string;
    updateFormat(): void;
}