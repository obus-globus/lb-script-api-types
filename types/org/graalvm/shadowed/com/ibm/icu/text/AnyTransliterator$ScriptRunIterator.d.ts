import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
export class AnyTransliterator$ScriptRunIterator extends Object {
    constructor(text: Replaceable, start: number, limit: number)
    limit: number;
    scriptCode: number;
    start: number;
    // private text: Replaceable;
    // private textLimit: number;
    // private textStart: number;
    adjustLimit(delta: number): void;
    next(): boolean;
}