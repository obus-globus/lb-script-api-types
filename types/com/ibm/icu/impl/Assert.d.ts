import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Assert extends Object {
    static assrt(paramarg0: boolean): void;
    static assrt(paramarg0: string, paramarg1: boolean): void;
    static fail(paramarg0: Exception): void;
    static fail(paramarg0: string): void;
    constructor()
}