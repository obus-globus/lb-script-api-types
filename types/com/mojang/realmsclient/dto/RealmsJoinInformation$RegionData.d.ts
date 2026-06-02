import type { RealmsRegion } from '../../../../com/mojang/realmsclient/dto/RealmsRegion.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { ServiceQuality } from '../../../../com/mojang/realmsclient/dto/ServiceQuality.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsJoinInformation$RegionData extends Record implements ReflectionBasedSerialization {
    constructor(region: RealmsRegion, serviceQuality: ServiceQuality)
    // private region: RealmsRegion;
    // private serviceQuality: ServiceQuality;
    equals(o: Object | null): boolean;
    hashCode(): number;
    region(): RealmsRegion;
    serviceQuality(): ServiceQuality;
    toString(): string;
}