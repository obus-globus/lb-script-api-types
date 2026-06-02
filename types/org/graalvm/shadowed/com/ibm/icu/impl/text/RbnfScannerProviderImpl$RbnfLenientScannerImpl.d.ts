import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RbnfLenientScanner } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RbnfLenientScanner.d.ts'
import type { RuleBasedCollator } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedCollator.d.ts'
export class RbnfScannerProviderImpl$RbnfLenientScannerImpl extends Object implements RbnfLenientScanner {
    private constructor(rbc: RuleBasedCollator)
    // private collator: RuleBasedCollator;
    allIgnorable(s: string): boolean;
    findText(str: string, key: string, startingAt: number): number[];
    findText2(str: string, key: string, startingAt: number): number[];
    prefixLength(str: string, prefix: string): number;
}