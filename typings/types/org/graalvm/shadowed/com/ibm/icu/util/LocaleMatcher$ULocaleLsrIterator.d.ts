import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { LSR } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LSR.d.ts'
import type { LocaleMatcher$LsrIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$LsrIterator.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class LocaleMatcher$ULocaleLsrIterator extends LocaleMatcher$LsrIterator {
    constructor(locales: Iterator<ULocale>)
    // private current: ULocale;
    // private locales: Iterator<ULocale>;
    // private remembered: ULocale;
    hasNext(): boolean;
    next(): LSR;
    rememberCurrent(desiredIndex: number): void;
}