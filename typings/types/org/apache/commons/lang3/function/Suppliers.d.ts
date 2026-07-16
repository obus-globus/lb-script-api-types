import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Suppliers extends Object {
    static get<T extends unknown>(paramarg0: () => T): T;
    static nul<T extends unknown>(): () => T;
    constructor()
}