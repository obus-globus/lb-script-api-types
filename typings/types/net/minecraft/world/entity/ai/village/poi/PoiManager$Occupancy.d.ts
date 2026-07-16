import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { PoiRecord } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord.d.ts'
export class PoiManager$Occupancy extends Enum<PoiManager$Occupancy> {
    static ANY: PoiManager$Occupancy;
    static HAS_SPACE: PoiManager$Occupancy;
    static IS_OCCUPIED: PoiManager$Occupancy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PoiManager$Occupancy;
    static values(): PoiManager$Occupancy[];
    private constructor(test: (param0: PoiRecord) => boolean)
    readonly test: (param0: PoiRecord) => boolean;
    getTest(): (param0: PoiRecord) => boolean;
    name(): "HAS_SPACE" | "IS_OCCUPIED" | "ANY";
}