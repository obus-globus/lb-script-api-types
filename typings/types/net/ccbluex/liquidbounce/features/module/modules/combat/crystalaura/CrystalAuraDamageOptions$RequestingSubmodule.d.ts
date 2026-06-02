import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CrystalAuraDamageOptions$RequestingSubmodule extends Enum<CrystalAuraDamageOptions$RequestingSubmodule> {
    static BASE_PLACE: CrystalAuraDamageOptions$RequestingSubmodule;
    static DESTROY: CrystalAuraDamageOptions$RequestingSubmodule;
    static PLACE: CrystalAuraDamageOptions$RequestingSubmodule;
    static getEntries(): CrystalAuraDamageOptions$RequestingSubmodule[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CrystalAuraDamageOptions$RequestingSubmodule;
    static values(): (Object | null)[];
    private constructor(basePlace: boolean)
    readonly basePlace: boolean;
    name(): "PLACE" | "DESTROY" | "BASE_PLACE";
}