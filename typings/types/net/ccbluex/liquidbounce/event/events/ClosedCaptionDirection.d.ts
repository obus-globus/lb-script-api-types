import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClosedCaptionDirection extends Enum<ClosedCaptionDirection> {
    static LEFT: ClosedCaptionDirection;
    static NONE: ClosedCaptionDirection;
    static RIGHT: ClosedCaptionDirection;
    static getEntries(): ClosedCaptionDirection[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClosedCaptionDirection;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "LEFT" | "RIGHT";
}