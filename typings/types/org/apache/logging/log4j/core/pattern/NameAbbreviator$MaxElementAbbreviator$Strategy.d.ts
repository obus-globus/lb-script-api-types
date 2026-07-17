import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NameAbbreviator$MaxElementAbbreviator$Strategy extends Enum<NameAbbreviator$MaxElementAbbreviator$Strategy> {
    static DROP: NameAbbreviator$MaxElementAbbreviator$Strategy;
    static RETAIN: NameAbbreviator$MaxElementAbbreviator$Strategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NameAbbreviator$MaxElementAbbreviator$Strategy;
    static values(): NameAbbreviator$MaxElementAbbreviator$Strategy[];
    private constructor(minCount: number)
    // private minCount: number;
    abbreviate(count: number, original: string, destination: StringBuilder): void;
    name(): "DROP" | "RETAIN";
}