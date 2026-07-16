import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BorderStatus extends Enum<BorderStatus> {
    static GROWING: BorderStatus;
    static SHRINKING: BorderStatus;
    static STATIONARY: BorderStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BorderStatus;
    static values(): BorderStatus[];
    private constructor(color: number)
    readonly color: number;
    getColor(): number;
    name(): "GROWING" | "SHRINKING" | "STATIONARY";
}