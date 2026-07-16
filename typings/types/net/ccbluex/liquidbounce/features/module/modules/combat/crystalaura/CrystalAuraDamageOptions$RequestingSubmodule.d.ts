import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CrystalAuraDamageOptions$RequestingSubmodule extends Enum<CrystalAuraDamageOptions$RequestingSubmodule> {
    static BASE_PLACE: CrystalAuraDamageOptions$RequestingSubmodule;
    static DESTROY: CrystalAuraDamageOptions$RequestingSubmodule;
    static PLACE: CrystalAuraDamageOptions$RequestingSubmodule;
    static getEntries(): CrystalAuraDamageOptions$RequestingSubmodule[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CrystalAuraDamageOptions$RequestingSubmodule;
    static values(): CrystalAuraDamageOptions$RequestingSubmodule[];
    private constructor(basePlace: boolean)
    readonly basePlace: boolean;
    name(): "PLACE" | "DESTROY" | "BASE_PLACE";
}