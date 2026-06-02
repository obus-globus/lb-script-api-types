import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Orientation$SideBias extends Enum<Orientation$SideBias> {
    static LEFT: Orientation$SideBias;
    static RIGHT: Orientation$SideBias;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Orientation$SideBias;
    static values(): (Object | null)[];
    private constructor(name: string)
    // private name: string;
    getOpposite(): Orientation$SideBias;
    toString(): string;
    name(): "LEFT" | "RIGHT";
}