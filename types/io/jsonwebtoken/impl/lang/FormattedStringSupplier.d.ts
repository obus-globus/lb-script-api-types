import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FormattedStringSupplier extends Object implements Supplier<string> {
    constructor(arg0: string, arg1: Object[])
    // private args: Object[];
    // private msg: string;
    get(): string;
}