import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class RoundingMode extends Enum<RoundingMode> {
    static CEILING: RoundingMode;
    static DOWN: RoundingMode;
    static FLOOR: RoundingMode;
    static HALF_DOWN: RoundingMode;
    static HALF_EVEN: RoundingMode;
    static HALF_UP: RoundingMode;
    static UNNECESSARY: RoundingMode;
    static UP: RoundingMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: number): RoundingMode;
    static valueOf(paramarg0: string): RoundingMode;
    static values(): RoundingMode[];
    private constructor(arg2: number)
    // private oldMode: number;
    name(): "UP" | "DOWN" | "CEILING" | "FLOOR" | "HALF_UP" | "HALF_DOWN" | "HALF_EVEN" | "UNNECESSARY";
}