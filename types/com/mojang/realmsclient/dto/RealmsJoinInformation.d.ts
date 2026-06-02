import type { GuardedSerializer } from '../../../../com/mojang/realmsclient/dto/GuardedSerializer.d.ts'
import type { RealmsJoinInformation$RegionData } from '../../../../com/mojang/realmsclient/dto/RealmsJoinInformation$RegionData.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsJoinInformation extends Record implements ReflectionBasedSerialization {
    static parse(paramgson: GuardedSerializer, paramjson: string): RealmsJoinInformation;
    constructor(address: string, resourcePackUrl: string, resourcePackHash: string, regionData: RealmsJoinInformation$RegionData)
    // private address: string;
    // private regionData: RealmsJoinInformation$RegionData;
    // private resourcePackHash: string;
    // private resourcePackUrl: string;
    address(): string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    regionData(): RealmsJoinInformation$RegionData;
    resourcePackHash(): string;
    resourcePackUrl(): string;
    toString(): string;
}