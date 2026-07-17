import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TransliteratorRegistry$ResourceEntry extends Object {
    constructor(resourceSupplier: () => string, dir: number)
    constructor(n: string, d: number)
    direction: number;
    readonly resource: string;
    // private resourceSupplier: () => string;
    getResource(): string;
}