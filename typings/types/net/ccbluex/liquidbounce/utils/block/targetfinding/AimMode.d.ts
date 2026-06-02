import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AimMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CENTER" | "RANDOM" | "STABILIZED" | "NEAREST_ROTATION" | "REVERSE_YAW" | "DIAGONAL_YAW" | "ANGLE_YAW" | "EDGE_POINT";
}