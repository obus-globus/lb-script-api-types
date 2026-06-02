import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { Transliterator } from '../../../../com/ibm/icu/text/Transliterator.d.ts'
import type { UnicodeReplacer } from '../../../../com/ibm/icu/text/UnicodeReplacer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FunctionReplacer extends Object implements UnicodeReplacer {
    constructor(arg0: Transliterator, arg1: UnicodeReplacer)
    // private replacer: UnicodeReplacer;
    // private translit: Transliterator;
    addReplacementSetTo(arg0: string[]): void;
    replace(arg0: Replaceable, arg1: number, arg2: number, arg3: number[]): number;
    toReplacerPattern(arg0: boolean): string;
}