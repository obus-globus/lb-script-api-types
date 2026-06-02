import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Assert extends Object {
    static assrt(paramval: boolean): void;
    static assrt(parammsg: string, paramval: boolean): void;
    static fail(parame: Exception): void;
    static fail(parammsg: string): void;
    constructor()
}