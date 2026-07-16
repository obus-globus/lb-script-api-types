import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsRegion extends Enum<RealmsRegion> {
    static AUSTRALIA_EAST: RealmsRegion;
    static AUSTRALIA_SOUTHEAST: RealmsRegion;
    static BRAZIL_SOUTH: RealmsRegion;
    static CENTRAL_INDIA: RealmsRegion;
    static CENTRAL_US: RealmsRegion;
    static EAST_ASIA: RealmsRegion;
    static EAST_US: RealmsRegion;
    static EAST_US_2: RealmsRegion;
    static FRANCE_CENTRAL: RealmsRegion;
    static INVALID_REGION: RealmsRegion;
    static JAPAN_EAST: RealmsRegion;
    static JAPAN_WEST: RealmsRegion;
    static KOREA_CENTRAL: RealmsRegion;
    static NORTH_CENTRAL_US: RealmsRegion;
    static NORTH_EUROPE: RealmsRegion;
    static SOUTHEAST_ASIA: RealmsRegion;
    static SOUTH_CENTRAL_US: RealmsRegion;
    static SWEDEN_CENTRAL: RealmsRegion;
    static UAE_NORTH: RealmsRegion;
    static UK_SOUTH: RealmsRegion;
    static WEST_CENTRAL_US: RealmsRegion;
    static WEST_EUROPE: RealmsRegion;
    static WEST_US: RealmsRegion;
    static WEST_US_2: RealmsRegion;
    static findByNameId(paramnameIdStr: string): RealmsRegion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RealmsRegion;
    static values(): RealmsRegion[];
    private constructor(nameId: string, translationKey: string)
    nameId: string;
    translationKey: string;
    name(): "AUSTRALIA_EAST" | "AUSTRALIA_SOUTHEAST" | "BRAZIL_SOUTH" | "CENTRAL_INDIA" | "CENTRAL_US" | "EAST_ASIA" | "EAST_US" | "EAST_US_2" | "FRANCE_CENTRAL" | "JAPAN_EAST" | "JAPAN_WEST" | "KOREA_CENTRAL" | "NORTH_CENTRAL_US" | "NORTH_EUROPE" | "SOUTH_CENTRAL_US" | "SOUTHEAST_ASIA" | "SWEDEN_CENTRAL" | "UAE_NORTH" | "UK_SOUTH" | "WEST_CENTRAL_US" | "WEST_EUROPE" | "WEST_US" | "WEST_US_2" | "INVALID_REGION";
}