import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RbnfLenientScanner } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export interface RbnfLenientScannerProvider extends Object{
    get(locale: ULocale, extras: string): RbnfLenientScanner;
}