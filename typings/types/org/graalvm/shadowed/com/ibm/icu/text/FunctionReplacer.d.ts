import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
import type { Transliterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator.d.ts'
import type { UnicodeReplacer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeReplacer.d.ts'
export class FunctionReplacer extends Object implements UnicodeReplacer {
    constructor(theTranslit: Transliterator, theReplacer: UnicodeReplacer)
    // private replacer: UnicodeReplacer;
    // private translit: Transliterator;
    addReplacementSetTo(toUnionTo: string[]): void;
    replace(text: Replaceable, start: number, limit: number, cursor: number[]): number;
    toReplacerPattern(escapeUnprintable: boolean): string;
}