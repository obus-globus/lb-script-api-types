import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Replaceable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Replaceable.d.ts'
export interface UnicodeReplacer extends Object{
    addReplacementSetTo(toUnionTo: string[]): void;
    replace(text: Replaceable, start: number, limit: number, cursor: number[]): number;
    toReplacerPattern(escapeUnprintable: boolean): string;
}