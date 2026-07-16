import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BoundType extends Enum<BoundType> {
    static CLOSED: BoundType;
    static OPEN: BoundType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BoundType;
    static values(): BoundType[];
    private constructor(inclusive: boolean)
    // private inclusive: boolean;
    name(): "OPEN" | "CLOSED";
}