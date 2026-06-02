import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegionPingResult extends Record implements ReflectionBasedSerialization {
    // private ping: number;
    // private regionName: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    ping(): number;
    regionName(): string;
    toString(): string;
}