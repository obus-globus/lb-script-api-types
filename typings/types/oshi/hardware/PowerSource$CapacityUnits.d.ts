import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class PowerSource$CapacityUnits extends Enum<PowerSource$CapacityUnits> {
    static MAH: PowerSource$CapacityUnits;
    static MWH: PowerSource$CapacityUnits;
    static RELATIVE: PowerSource$CapacityUnits;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PowerSource$CapacityUnits;
    static values(): PowerSource$CapacityUnits[];
    private constructor()
    name(): "MWH" | "MAH" | "RELATIVE";
}