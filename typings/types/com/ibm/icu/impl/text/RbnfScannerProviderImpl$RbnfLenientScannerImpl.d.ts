import type { RbnfLenientScanner } from '../../../../../com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { RuleBasedCollator } from '../../../../../com/ibm/icu/text/RuleBasedCollator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RbnfScannerProviderImpl$RbnfLenientScannerImpl extends Object implements RbnfLenientScanner {
    private constructor(arg0: RuleBasedCollator)
    // private collator: RuleBasedCollator;
    allIgnorable(arg0: string): boolean;
    findText(arg0: string, arg1: string, arg2: number): number[];
    findText2(arg0: string, arg1: string, arg2: number): number[];
    prefixLength(arg0: string, arg1: string): number;
}