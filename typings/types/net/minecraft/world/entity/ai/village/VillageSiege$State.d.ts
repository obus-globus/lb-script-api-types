import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class VillageSiege$State extends Enum<VillageSiege$State> {
    static SIEGE_CAN_ACTIVATE: VillageSiege$State;
    static SIEGE_DONE: VillageSiege$State;
    static SIEGE_TONIGHT: VillageSiege$State;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): VillageSiege$State;
    static values(): VillageSiege$State[];
    private constructor()
    name(): "SIEGE_CAN_ACTIVATE" | "SIEGE_TONIGHT" | "SIEGE_DONE";
}