import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NameAbbreviator$MaxElementAbbreviator$Strategy extends Enum<NameAbbreviator$MaxElementAbbreviator$Strategy> {
    static DROP: NameAbbreviator$MaxElementAbbreviator$Strategy;
    static RETAIN: NameAbbreviator$MaxElementAbbreviator$Strategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NameAbbreviator$MaxElementAbbreviator$Strategy;
    static values(): (Object | null)[];
    constructor(arg2: number, arg3: any)
    // private minCount: number;
    abbreviate(count: number, original: string, destination: StringBuilder): void;
    name(): "DROP" | "RETAIN";
}