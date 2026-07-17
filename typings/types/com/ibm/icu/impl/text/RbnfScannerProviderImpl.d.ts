import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { RbnfLenientScanner } from '../../../../../com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { RbnfLenientScannerProvider } from '../../../../../com/ibm/icu/text/RbnfLenientScannerProvider.d.ts'
import type { ULocale } from '../../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RbnfScannerProviderImpl extends Object implements RbnfLenientScannerProvider {
    constructor()
    // private cache: JavaMap<string, RbnfLenientScanner>;
    createScanner(arg0: ULocale, arg1: string): RbnfLenientScanner;
    get(arg0: ULocale, arg1: string): RbnfLenientScanner;
}