import type { LSR } from '../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { LocaleMatcher$LsrIterator } from '../../../../com/ibm/icu/util/LocaleMatcher$LsrIterator.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class LocaleMatcher$LocaleLsrIterator extends LocaleMatcher$LsrIterator {
    constructor(arg0: Iterator<Locale>)
    // private current: Locale;
    // private locales: Iterator<Locale>;
    // private remembered: Locale;
    hasNext(): boolean;
    next(): LSR;
    rememberCurrent(arg0: number): void;
}