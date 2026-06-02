import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { RegionPingResult } from '../../../../com/mojang/realmsclient/dto/RegionPingResult.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PingResult extends Record implements ReflectionBasedSerialization {
    constructor(pingResults: RegionPingResult[], realmIds: number[])
    // private pingResults: RegionPingResult[];
    // private realmIds: number[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    pingResults(): RegionPingResult[];
    realmIds(): number[];
    toString(): string;
}