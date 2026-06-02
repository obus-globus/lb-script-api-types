import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AutoFarmTrackedState } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmTrackedState.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class AutoFarmTrackedState$Plantable extends Enum<AutoFarmTrackedState$Plantable> implements Tagged, AutoFarmTrackedState {
    static Companion: Tagged$Companion;
    static FARMLAND: AutoFarmTrackedState$Plantable;
    static JUNGLE_LOGS: AutoFarmTrackedState$Plantable;
    static SOUL_SAND: AutoFarmTrackedState$Plantable;
    static getEntries(): AutoFarmTrackedState$Plantable[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AutoFarmTrackedState$Plantable;
    static values(): (Object | null)[];
    private constructor(tag: string, items: E[])
    readonly items: E[];
    readonly tag: string;
    protected findPlantableNeighbors0(pos: BlockPos, state: BlockState): E[];
    findPlantableSides(pos: BlockPos, state: BlockState): E[];
    isBlockMatches(state: BlockState): boolean;
    name(): "FARMLAND" | "SOUL_SAND" | "JUNGLE_LOGS";
}