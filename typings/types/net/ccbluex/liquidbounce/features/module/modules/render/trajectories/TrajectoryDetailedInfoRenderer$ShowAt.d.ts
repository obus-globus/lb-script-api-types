import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TrajectoryInfoRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer.d.ts'
import type { TrajectoryInfoRenderer$SimulationResult } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer$SimulationResult.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrajectoryDetailedInfoRenderer$ShowAt extends Enum<TrajectoryDetailedInfoRenderer$ShowAt> implements Tagged {
    static Companion: Tagged$Companion;
    static ENTITY: TrajectoryDetailedInfoRenderer$ShowAt;
    static LANDING: TrajectoryDetailedInfoRenderer$ShowAt;
    static OWNER: TrajectoryDetailedInfoRenderer$ShowAt;
    static getEntries(): TrajectoryDetailedInfoRenderer$ShowAt[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TrajectoryDetailedInfoRenderer$ShowAt;
    static values(): TrajectoryDetailedInfoRenderer$ShowAt[];
    private constructor(tag: string)
    readonly tag: string;
    apply(renderer: TrajectoryInfoRenderer, result: TrajectoryInfoRenderer$SimulationResult): Vec3;
    name(): "OWNER" | "ENTITY" | "LANDING";
}