import type { Transliterator } from '../../../../com/ibm/icu/text/Transliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransliteratorIDParser$SingleID extends Object {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    basicID: string;
    canonID: string;
    filter: string;
    getInstance(): Transliterator;
}