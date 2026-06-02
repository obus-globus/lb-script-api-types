import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CodePointMap$StringIterator extends Object {
    constructor(null_: CodePointMap$StringIterator, arg1: CharSequence, arg2: number)
    // private c: number;
    // private s: CharSequence;
    // private sIndex: number;
    value: number;
    getCodePoint(): number;
    getIndex(): number;
    getValue(): number;
    next(): boolean;
    previous(): boolean;
    reset(arg0: CharSequence, arg1: number): void;
}