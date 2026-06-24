import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { CodePointMap$Range } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CodePointMap$Range.d.ts'
export class CodePointMap$StringIterator extends Object {
    constructor(null_: CodePointMap$Range[], s: CharSequence, sIndex: number)
    // private c: number;
    // private s: CharSequence;
    // private sIndex: number;
    value: number;
    getCodePoint(): number;
    getIndex(): number;
    getValue(): number;
    next(): boolean;
    previous(): boolean;
    reset(s: CharSequence, sIndex: number): void;
}