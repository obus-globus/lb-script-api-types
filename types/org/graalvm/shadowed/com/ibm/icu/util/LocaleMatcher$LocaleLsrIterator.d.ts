import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { LSR } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LSR.d.ts'
import type { LocaleMatcher$LsrIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/LocaleMatcher$LsrIterator.d.ts'
export class LocaleMatcher$LocaleLsrIterator extends LocaleMatcher$LsrIterator {
    constructor(locales: Iterator<Locale>)
    // private current: Locale;
    // private locales: Iterator<Locale>;
    // private remembered: Locale;
    hasNext(): boolean;
    next(): LSR;
    rememberCurrent(desiredIndex: number): void;
}