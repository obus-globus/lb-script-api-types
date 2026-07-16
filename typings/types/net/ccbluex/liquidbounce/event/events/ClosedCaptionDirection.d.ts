import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClosedCaptionDirection extends Enum<ClosedCaptionDirection> {
    static LEFT: ClosedCaptionDirection;
    static NONE: ClosedCaptionDirection;
    static RIGHT: ClosedCaptionDirection;
    static getEntries(): ClosedCaptionDirection[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ClosedCaptionDirection;
    static values(): ClosedCaptionDirection[];
    private constructor()
    name(): "NONE" | "LEFT" | "RIGHT";
}