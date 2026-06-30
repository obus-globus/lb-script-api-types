import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TrajectoryInfoRenderer$Type extends Enum<TrajectoryInfoRenderer$Type> {
    static HYPOTHETICAL: TrajectoryInfoRenderer$Type;
    static REAL: TrajectoryInfoRenderer$Type;
    static getEntries(): TrajectoryInfoRenderer$Type[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrajectoryInfoRenderer$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "HYPOTHETICAL" | "REAL";
}