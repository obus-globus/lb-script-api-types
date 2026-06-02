import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MapTrackedObject$Type extends Enum<MapTrackedObject$Type> {
    static BLOCK: MapTrackedObject$Type;
    static ENTITY: MapTrackedObject$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MapTrackedObject$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "ENTITY" | "BLOCK";
}