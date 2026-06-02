import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HexDump extends Object {
    static EOL: string;
    static dump(paramarg0: number[], paramarg1: Appendable): void;
    static dump(paramarg0: number[], paramarg1: number, paramarg2: OutputStream, paramarg3: number): void;
    static dump(paramarg0: number[], paramarg1: number, paramarg2: Appendable, paramarg3: number, paramarg4: number): void;
    constructor()
}