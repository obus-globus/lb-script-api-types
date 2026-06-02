import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class TrajectoryDetailedInfoRenderer$DurationUnit extends Enum<TrajectoryDetailedInfoRenderer$DurationUnit> implements Tagged {
    static Companion: Tagged$Companion;
    static SECONDS: TrajectoryDetailedInfoRenderer$DurationUnit;
    static TICKS: TrajectoryDetailedInfoRenderer$DurationUnit;
    static getEntries(): TrajectoryDetailedInfoRenderer$DurationUnit[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrajectoryDetailedInfoRenderer$DurationUnit;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    format(ticks: number): string;
    name(): "TICKS" | "SECONDS";
}