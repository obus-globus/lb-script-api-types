import type { UnicodeMatcher } from '../../../../com/ibm/icu/text/UnicodeMatcher.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SymbolTable extends Object{
    lookup(arg0: string): string[];
    lookupMatcher(arg0: number): UnicodeMatcher;
    parseReference(arg0: string, arg1: ParsePosition, arg2: number): string;
}