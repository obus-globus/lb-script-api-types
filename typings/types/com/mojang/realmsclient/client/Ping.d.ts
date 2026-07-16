import type { Ping$Region } from '../../../../com/mojang/realmsclient/client/Ping$Region.d.ts'
import type { RegionPingResult } from '../../../../com/mojang/realmsclient/dto/RegionPingResult.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Ping extends Object {
    static ping(...paramregions: Ping$Region[]): RegionPingResult[];
    static pingAllRegions(): RegionPingResult[];
    constructor()
}