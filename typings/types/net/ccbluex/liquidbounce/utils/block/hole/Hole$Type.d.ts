import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Hole$Type extends Enum<Hole$Type> {
    static ONE_ONE: Hole$Type;
    static ONE_TWO: Hole$Type;
    static TWO_TWO: Hole$Type;
    static getEntries(): Hole$Type[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Hole$Type;
    static values(): (Object | null)[];
    private constructor(size: number)
    readonly size: number;
    name(): "ONE_ONE" | "ONE_TWO" | "TWO_TWO";
}