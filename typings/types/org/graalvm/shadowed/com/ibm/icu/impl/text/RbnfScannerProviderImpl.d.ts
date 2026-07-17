import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RbnfLenientScanner } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { RbnfLenientScannerProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RbnfLenientScannerProvider.d.ts'
import type { ULocale } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class RbnfScannerProviderImpl extends Object implements RbnfLenientScannerProvider {
    constructor()
    // private cache: JavaMap<string, RbnfLenientScanner>;
    createScanner(locale: ULocale, extras: string): RbnfLenientScanner;
    get(locale: ULocale, extras: string): RbnfLenientScanner;
}