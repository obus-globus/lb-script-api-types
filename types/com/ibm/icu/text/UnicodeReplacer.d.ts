import type { Replaceable } from '../../../../com/ibm/icu/text/Replaceable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UnicodeReplacer extends Object{
    addReplacementSetTo(arg0: string[]): void;
    replace(arg0: Replaceable, arg1: number, arg2: number, arg3: number[]): number;
    toReplacerPattern(arg0: boolean): string;
}