import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Direction$AxisDirection extends Enum<Direction$AxisDirection> {
    static NEGATIVE: Direction$AxisDirection;
    static POSITIVE: Direction$AxisDirection;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Direction$AxisDirection;
    static values(): (Object | null)[];
    private constructor(step: number, name: string)
    readonly step: number;
    getName(): string;
    getStep(): number;
    opposite(): Direction$AxisDirection;
    toString(): string;
    name(): "POSITIVE" | "NEGATIVE";
}