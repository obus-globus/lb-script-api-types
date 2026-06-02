import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UnicodeMatcher extends Object{
    addMatchSetTo(arg0: string[]): void;
    matches(arg0: Replaceable, arg1: number[], arg2: number, arg3: boolean): number;
    matchesIndexValue(arg0: number): boolean;
    toPattern(arg0: boolean): string;
}