import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Region$RegionType extends Enum<Region$RegionType> {
    static CONTINENT: Region$RegionType;
    static DEPRECATED: Region$RegionType;
    static GROUPING: Region$RegionType;
    static SUBCONTINENT: Region$RegionType;
    static TERRITORY: Region$RegionType;
    static UNKNOWN: Region$RegionType;
    static WORLD: Region$RegionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Region$RegionType;
    static values(): Region$RegionType[];
    private constructor()
    name(): "UNKNOWN" | "TERRITORY" | "WORLD" | "CONTINENT" | "SUBCONTINENT" | "GROUPING" | "DEPRECATED";
}