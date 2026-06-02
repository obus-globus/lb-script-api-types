import type { RbnfLenientScanner } from '../../../../com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RbnfLenientScannerProvider extends Object{
    get(arg0: ULocale, arg1: string): RbnfLenientScanner;
}