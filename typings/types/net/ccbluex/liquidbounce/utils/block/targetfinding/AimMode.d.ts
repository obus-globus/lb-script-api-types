import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class AimMode extends Enum<AimMode> implements Tagged {
    static ANGLE_YAW: AimMode;
    static CENTER: AimMode;
    static Companion: Tagged$Companion;
    static DIAGONAL_YAW: AimMode;
    static EDGE_POINT: AimMode;
    static NEAREST_ROTATION: AimMode;
    static RANDOM: AimMode;
    static REVERSE_YAW: AimMode;
    static STABILIZED: AimMode;
    static getEntries(): AimMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): AimMode;
    static values(): AimMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CENTER" | "RANDOM" | "STABILIZED" | "NEAREST_ROTATION" | "REVERSE_YAW" | "DIAGONAL_YAW" | "ANGLE_YAW" | "EDGE_POINT";
}