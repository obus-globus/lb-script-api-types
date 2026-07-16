import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Direction$AxisDirection extends Enum<Direction$AxisDirection> {
    static NEGATIVE: Direction$AxisDirection;
    static POSITIVE: Direction$AxisDirection;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Direction$AxisDirection;
    static values(): Direction$AxisDirection[];
    private constructor(step: number, name: string)
    readonly step: number;
    getName(): string;
    getStep(): number;
    opposite(): Direction$AxisDirection;
    toString(): string;
    name(): "POSITIVE" | "NEGATIVE";
}