import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { NameAbbreviator } from '../../../../../../org/apache/logging/log4j/core/pattern/NameAbbreviator.d.ts'
import type { NameAbbreviator$PatternAbbreviatorFragment } from '../../../../../../org/apache/logging/log4j/core/pattern/NameAbbreviator$PatternAbbreviatorFragment.d.ts'
export class NameAbbreviator$PatternAbbreviator extends NameAbbreviator {
    static getAbbreviator(parampattern: string): NameAbbreviator;
    static getDefaultAbbreviator(): NameAbbreviator;
    constructor(fragments: NameAbbreviator$PatternAbbreviatorFragment[])
    // private fragments: NameAbbreviator$PatternAbbreviatorFragment[];
    abbreviate(original: string, destination: StringBuilder): void;
    fragment(index: number): NameAbbreviator$PatternAbbreviatorFragment;
    toString(): string;
}