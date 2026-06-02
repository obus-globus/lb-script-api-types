import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AnyTransliterator$ScriptRunIterator extends Object {
    constructor(arg0: Replaceable, arg1: number, arg2: number)
    limit: number;
    scriptCode: number;
    start: number;
    // private text: Replaceable;
    // private textLimit: number;
    // private textStart: number;
    adjustLimit(arg0: number): void;
    next(): boolean;
}