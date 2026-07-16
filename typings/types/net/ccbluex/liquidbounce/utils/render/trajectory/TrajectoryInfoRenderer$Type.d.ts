import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TrajectoryInfoRenderer$Type extends Enum<TrajectoryInfoRenderer$Type> {
    static HYPOTHETICAL: TrajectoryInfoRenderer$Type;
    static REAL: TrajectoryInfoRenderer$Type;
    static getEntries(): TrajectoryInfoRenderer$Type[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TrajectoryInfoRenderer$Type;
    static values(): TrajectoryInfoRenderer$Type[];
    private constructor()
    name(): "HYPOTHETICAL" | "REAL";
}