import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MapItemTrackedActor_Type extends Enum<MapItemTrackedActor_Type> {
    static BlockEntity: MapItemTrackedActor_Type;
    static Entity: MapItemTrackedActor_Type;
    static Other: MapItemTrackedActor_Type;
    static getByName(paramarg0: string): MapItemTrackedActor_Type;
    static getByName(paramarg0: string, paramarg1: MapItemTrackedActor_Type): MapItemTrackedActor_Type;
    static getByValue(paramarg0: number): MapItemTrackedActor_Type;
    static getByValue(paramarg0: number, paramarg1: MapItemTrackedActor_Type): MapItemTrackedActor_Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MapItemTrackedActor_Type;
    static values(): MapItemTrackedActor_Type[];
    private constructor(arg2: number)
    private constructor(arg2: MapItemTrackedActor_Type)
    readonly value: number;
    getValue(): number;
    name(): "Entity" | "BlockEntity" | "Other";
}