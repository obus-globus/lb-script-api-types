import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Dimension extends Enum<Dimension> {
    static END: Dimension;
    static NETHER: Dimension;
    static OVERWORLD: Dimension;
    static getByValue(paramarg0: number): Dimension;
    static getDimensionKeys(): string[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Dimension;
    static values(): Dimension[];
    private constructor(arg2: string)
    readonly key: string;
    getKey(): string;
    name(): "OVERWORLD" | "NETHER" | "END";
}