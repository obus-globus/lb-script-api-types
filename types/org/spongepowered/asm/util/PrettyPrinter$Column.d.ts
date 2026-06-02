import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PrettyPrinter$Alignment } from '../../../../org/spongepowered/asm/util/PrettyPrinter$Alignment.d.ts'
import type { PrettyPrinter$Table } from '../../../../org/spongepowered/asm/util/PrettyPrinter$Table.d.ts'
export class PrettyPrinter$Column extends Object {
    constructor(arg0: PrettyPrinter$Table)
    constructor(arg0: PrettyPrinter$Table, arg1: string)
    // private align: PrettyPrinter$Alignment;
    // private format: string;
    // private maxWidth: number;
    // private minWidth: number;
    // private size: number;
    // private table: PrettyPrinter$Table;
    // private title: string;
    getFormat(): string;
    getMaxWidth(): number;
    setAlignment(arg0: PrettyPrinter$Alignment): void;
    setMaxWidth(arg0: number): void;
    setMinWidth(arg0: number): void;
    setWidth(arg0: number): void;
    toString(): string;
    // private updateFormat(): void;
}