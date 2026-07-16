import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Dimension extends Enum<Dimension> {
    static END: Dimension;
    static NETHER: Dimension;
    static OVERWORLD: Dimension;
    static fromId(paramarg0: number): Dimension;
    static fromString(paramarg0: string): Dimension;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Dimension;
    static values(): Dimension[];
    private constructor(arg2: string, arg3: number)
    readonly id: number;
    getId(): number;
    getName(): string;
    toString(): string;
    name(): "OVERWORLD" | "NETHER" | "END";
}