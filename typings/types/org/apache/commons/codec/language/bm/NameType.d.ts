import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class NameType extends Enum<NameType> {
    static ASHKENAZI: NameType;
    static GENERIC: NameType;
    static SEPHARDIC: NameType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NameType;
    static values(): NameType[];
    private constructor(arg2: string)
    getName(): string;
    name(): "ASHKENAZI" | "GENERIC" | "SEPHARDIC";
}