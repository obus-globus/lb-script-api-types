import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MapTrackedObject$Type extends Enum<MapTrackedObject$Type> {
    static BLOCK: MapTrackedObject$Type;
    static ENTITY: MapTrackedObject$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MapTrackedObject$Type;
    static values(): MapTrackedObject$Type[];
    private constructor()
    name(): "ENTITY" | "BLOCK";
}