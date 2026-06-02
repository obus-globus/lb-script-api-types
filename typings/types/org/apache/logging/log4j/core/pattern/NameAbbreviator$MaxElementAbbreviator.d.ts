import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { NameAbbreviator } from '../../../../../../org/apache/logging/log4j/core/pattern/NameAbbreviator.d.ts'
import type { NameAbbreviator$MaxElementAbbreviator$Strategy } from '../../../../../../org/apache/logging/log4j/core/pattern/NameAbbreviator$MaxElementAbbreviator$Strategy.d.ts'
export class NameAbbreviator$MaxElementAbbreviator extends NameAbbreviator {
    static getAbbreviator(parampattern: string): NameAbbreviator;
    static getDefaultAbbreviator(): NameAbbreviator;
    constructor(count: number, strategy: NameAbbreviator$MaxElementAbbreviator$Strategy)
    // private count: number;
    // private strategy: NameAbbreviator$MaxElementAbbreviator$Strategy;
    abbreviate(original: string, destination: StringBuilder): void;
}