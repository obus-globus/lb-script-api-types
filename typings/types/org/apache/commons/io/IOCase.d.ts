import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class IOCase extends Enum<IOCase> {
    static INSENSITIVE: IOCase;
    static SENSITIVE: IOCase;
    static SYSTEM: IOCase;
    static forName(paramarg0: string): IOCase;
    static isCaseSensitive(paramarg0: IOCase): boolean;
    static value(paramarg0: IOCase, paramarg1: IOCase): IOCase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IOCase;
    static values(): IOCase[];
    private constructor(arg2: string, arg3: boolean)
    // private sensitive: boolean;
    checkCompareTo(arg0: string, arg1: string): number;
    checkEndsWith(arg0: string, arg1: string): boolean;
    checkEquals(arg0: string, arg1: string): boolean;
    checkIndexOf(arg0: string, arg1: number, arg2: string): number;
    checkRegionMatches(arg0: string, arg1: number, arg2: string): boolean;
    checkStartsWith(arg0: string, arg1: string): boolean;
    getName(): string;
    isCaseSensitive(): boolean;
    // private readResolve(): Object;
    toString(): string;
    name(): "SENSITIVE" | "INSENSITIVE" | "SYSTEM";
}