import type { RealmsDescriptionDto } from '../../../../com/mojang/realmsclient/dto/RealmsDescriptionDto.d.ts'
import type { RealmsSetting } from '../../../../com/mojang/realmsclient/dto/RealmsSetting.d.ts'
import type { RealmsSlotUpdateDto } from '../../../../com/mojang/realmsclient/dto/RealmsSlotUpdateDto.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { RegionSelectionPreferenceDto } from '../../../../com/mojang/realmsclient/dto/RegionSelectionPreferenceDto.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsConfigurationDto extends Record implements ReflectionBasedSerialization {
    constructor(options: RealmsSlotUpdateDto, settings: RealmsSetting[], regionSelectionPreference: RegionSelectionPreferenceDto, description: RealmsDescriptionDto)
    // private description: RealmsDescriptionDto;
    // private options: RealmsSlotUpdateDto;
    // private regionSelectionPreference: RegionSelectionPreferenceDto;
    // private settings: RealmsSetting[];
    description(): RealmsDescriptionDto;
    equals(o: Object | null): boolean;
    hashCode(): number;
    options(): RealmsSlotUpdateDto;
    regionSelectionPreference(): RegionSelectionPreferenceDto;
    settings(): RealmsSetting[];
    toString(): string;
}