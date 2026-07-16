import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BoundType extends Enum<BoundType> {
    static CLOSED: BoundType;
    static OPEN: BoundType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BoundType;
    static values(): BoundType[];
    private constructor(inclusive: boolean)
    // private inclusive: boolean;
    name(): "OPEN" | "CLOSED";
}