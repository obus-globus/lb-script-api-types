import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { TrajectoryInfoRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer.d.ts'
import type { TrajectoryInfoRenderer$SimulationResult } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer$SimulationResult.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrajectoryDetailedInfoRenderer$ShowAt extends Enum<TrajectoryDetailedInfoRenderer$ShowAt> implements BiFunction<TrajectoryInfoRenderer, TrajectoryInfoRenderer$SimulationResult, Vec3>, Tagged {
    static Companion: Tagged$Companion;
    static ENTITY: TrajectoryDetailedInfoRenderer$ShowAt;
    static LANDING: TrajectoryDetailedInfoRenderer$ShowAt;
    static OWNER: TrajectoryDetailedInfoRenderer$ShowAt;
    static getEntries(): TrajectoryDetailedInfoRenderer$ShowAt[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TrajectoryDetailedInfoRenderer$ShowAt;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    andThen<V extends Object | number | string | boolean>(arg0: (param0: Vec3) => V): (param0: TrajectoryInfoRenderer, param1: TrajectoryInfoRenderer$SimulationResult) => V;
    apply(renderer: TrajectoryInfoRenderer, result: TrajectoryInfoRenderer$SimulationResult): Vec3;
    name(): "OWNER" | "ENTITY" | "LANDING";
}