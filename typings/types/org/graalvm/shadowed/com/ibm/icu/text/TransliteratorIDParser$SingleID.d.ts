import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Transliterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator.d.ts'
export class TransliteratorIDParser$SingleID extends Object {
    constructor(c: string, b: string)
    constructor(c: string, b: string, f: string)
    basicID: string;
    canonID: string;
    filter: string;
    getInstance(): Transliterator;
}