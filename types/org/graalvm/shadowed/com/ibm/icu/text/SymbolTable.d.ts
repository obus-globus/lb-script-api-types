import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UnicodeMatcher } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeMatcher.d.ts'
export interface SymbolTable extends Object{
    lookup(s: string): string[];
    lookupMatcher(ch: number): UnicodeMatcher;
    parseReference(text: string, pos: ParsePosition, limit: number): string;
}