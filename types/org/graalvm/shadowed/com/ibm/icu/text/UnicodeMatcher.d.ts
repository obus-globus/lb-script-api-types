import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
export interface UnicodeMatcher extends Object{
    addMatchSetTo(toUnionTo: string[]): void;
    matches(text: Replaceable, offset: number[], limit: number, incremental: boolean): number;
    matchesIndexValue(v: number): boolean;
    toPattern(escapeUnprintable: boolean): string;
}