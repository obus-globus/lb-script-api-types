import type { LSR } from '../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { LocaleMatcher$LsrIterator } from '../../../../com/ibm/icu/util/LocaleMatcher$LsrIterator.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class LocaleMatcher$ULocaleLsrIterator extends LocaleMatcher$LsrIterator {
    constructor(arg0: Iterator<ULocale>)
    // private current: ULocale;
    // private locales: Iterator<ULocale>;
    // private remembered: ULocale;
    hasNext(): boolean;
    next(): LSR;
    rememberCurrent(arg0: number): void;
}