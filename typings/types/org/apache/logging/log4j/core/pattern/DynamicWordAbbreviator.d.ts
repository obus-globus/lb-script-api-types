import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { NameAbbreviator } from '../../../../../../org/apache/logging/log4j/core/pattern/NameAbbreviator.d.ts'
export class DynamicWordAbbreviator extends NameAbbreviator {
    static getAbbreviator(parampattern: string): NameAbbreviator;
    static getDefaultAbbreviator(): NameAbbreviator;
    private constructor(rightWordCount: number)
    // private rightWordCount: number;
    abbreviate(original: string, destination: StringBuilder): void;
}