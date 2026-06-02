import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { RegionDataDto } from '../../../../com/mojang/realmsclient/dto/RegionDataDto.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PreferredRegionsDto extends Record implements ReflectionBasedSerialization {
    static empty(): PreferredRegionsDto;
    constructor(regionData: RegionDataDto[])
    // private regionData: RegionDataDto[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    regionData(): RegionDataDto[];
    toString(): string;
}