import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DumperOptions$Version extends Enum<DumperOptions$Version> {
    static V1_0: DumperOptions$Version;
    static V1_1: DumperOptions$Version;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DumperOptions$Version;
    static values(): DumperOptions$Version[];
    private constructor(arg2: number[])
    // private version: number[];
    getRepresentation(): string;
    major(): number;
    minor(): number;
    toString(): string;
    name(): "V1_0" | "V1_1";
}