import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NameType extends Enum<NameType> {
    static ASHKENAZI: NameType;
    static GENERIC: NameType;
    static SEPHARDIC: NameType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NameType;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly name: string;
    getName(): string;
    name(): "ASHKENAZI" | "GENERIC" | "SEPHARDIC";
}