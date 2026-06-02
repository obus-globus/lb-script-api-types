import type { RealmsRegion } from '../../../../com/mojang/realmsclient/dto/RealmsRegion.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { RegionSelectionPreference } from '../../../../com/mojang/realmsclient/dto/RegionSelectionPreference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegionSelectionPreferenceDto extends Object implements ReflectionBasedSerialization {
    static DEFAULT: RegionSelectionPreferenceDto;
    constructor(regionSelectionPreference: RegionSelectionPreference, preferredRegion: RealmsRegion)
    preferredRegion: RealmsRegion;
    regionSelectionPreference: RegionSelectionPreference;
    copy(): RegionSelectionPreferenceDto;
}