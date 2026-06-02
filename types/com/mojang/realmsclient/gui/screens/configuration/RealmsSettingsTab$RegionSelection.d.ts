import type { RealmsRegion } from '../../../../../../com/mojang/realmsclient/dto/RealmsRegion.d.ts'
import type { RegionSelectionPreference } from '../../../../../../com/mojang/realmsclient/dto/RegionSelectionPreference.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RealmsSettingsTab$RegionSelection extends Record {
    constructor(preference: RegionSelectionPreference, region: RealmsRegion)
    // private preference: RegionSelectionPreference;
    // private region: RealmsRegion;
    equals(o: Object | null): boolean;
    hashCode(): number;
    preference(): RegionSelectionPreference;
    region(): RealmsRegion;
    toString(): string;
}