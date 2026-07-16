import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AbstractBoat$Status extends Enum<AbstractBoat$Status> {
    static IN_AIR: AbstractBoat$Status;
    static IN_WATER: AbstractBoat$Status;
    static ON_LAND: AbstractBoat$Status;
    static UNDER_FLOWING_WATER: AbstractBoat$Status;
    static UNDER_WATER: AbstractBoat$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AbstractBoat$Status;
    static values(): AbstractBoat$Status[];
    private constructor()
    name(): "IN_WATER" | "UNDER_WATER" | "UNDER_FLOWING_WATER" | "ON_LAND" | "IN_AIR";
}