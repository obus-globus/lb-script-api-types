import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Orientation$SideBias extends Enum<Orientation$SideBias> {
    static LEFT: Orientation$SideBias;
    static RIGHT: Orientation$SideBias;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Orientation$SideBias;
    static values(): Orientation$SideBias[];
    private constructor(name: string)
    // private name: string;
    getOpposite(): Orientation$SideBias;
    toString(): string;
    name(): "LEFT" | "RIGHT";
}